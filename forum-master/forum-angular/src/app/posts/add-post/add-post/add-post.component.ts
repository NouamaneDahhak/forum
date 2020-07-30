import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { Category } from './../../../DTO/Category';
import { Post } from './../../../DTO/Post';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../../services.service';
import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


  post = null;
  fileToupload :  File = null;
  idPost = null;
  edit=false;
   listCategory: Array<Category>
   idCategory = null;
   titleGroup = null;
  message="";
  idUser = null;
  imageUrl ="default-img.png"
  importForm = this.formBuilder.group({
    title:  [""],
    content : [""],
    categoryId : [1],
    img : [""],
    date : ["blog-2-806x440.png"],
    userId : [""],

  });
  Usertype = null
  constructor(private route: ActivatedRoute,private router:Router,private datePipe: DatePipe,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.Usertype = localStorage.getItem('Usertype');

    if(this.route.snapshot.data['data'] == "edit"){


    this.idPost = this.route.snapshot.paramMap.get('idPost');


    this.servicesService.GetPostById(this.idPost).subscribe((post) => {
      if(post != null){
        this.post= post;


      this.edit = true;
      this.importForm.get("title").setValue(post.title);
      this.importForm.get("content").setValue(post.content);
      if(this.post.img != "default-img.png" ){
        this.imageUrl = "api/posts/getImage/" + this.post.img + "/none";

      }

      this.idCategory = this.post.categoryId;


      }
      else{
      }

    })




    }



    this.idCategory = this.route.snapshot.paramMap.get('idCategory');
    this.titleGroup =  this.route.snapshot.paramMap.get('titleGroup');
    this.servicesService.GetAllCategory().subscribe((category) => {
      if (category != null){
        this.listCategory = category;
      }
      else{
      }

    })


    if(localStorage.getItem('userId') != undefined){
      this.idUser = localStorage.getItem('userId');

    }
    else{
      this.router.navigate(["/"]);

    }


  }

  CreatePost(){

    var post = new Post();
    post.title    =  this.importForm?.value?.title
    post.content =  this.importForm?.value?.content
    post.date =  formatDate(new Date(), 'dd/MM/yyyy h:mm', 'en');
    post.userId =  this.idUser
    post.categoryId = +this.route.snapshot.paramMap.get('idCategory');
    post.nbComment =  "0"
    post.views =  "0"
    post.nblike = 0
    post.nbdislike = 0
    post.epingler = false
    post.postId = +this.route.snapshot.paramMap.get('idGroup');
    post.img =  "default-img.png";






    var imgPost =  "imgPost"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') + '.jpg';
    var filePost =  "file"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') ;
    var txtPost =  "txtPost"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') ;
    var imgCatalogPost =  "imgCatalogPost"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') ;
    if (this?.fileList?.length > 0) {
      post.img =  imgPost;

      const file = this.fileList[0];
      const formData = new FormData();
      formData.append('file', file,imgPost );
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }
    if (this?.fileListFILE?.length > 0) {
      post.filePost =  filePost +"-" + this.fileListFILE[0].name;

      const file = this.fileListFILE[0];
      const formData = new FormData();
      formData.append('file', file,filePost +"-" + this.fileListFILE[0].name);
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }
    if (this?.fileListTXT?.length > 0) {
      post.txtPost =  txtPost +"-" + this.fileListTXT[0].name;

      const file = this.fileListTXT[0];
      const formData = new FormData();
      formData.append('file', file,txtPost +"-" + this.fileListTXT[0].name);
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }
    if (this?.fileListIMG?.length > 0) {
      post.imgCatalogPost =  imgCatalogPost  + "-" + this.fileListIMG[0].name ;

      const file = this.fileListIMG[0];
      const formData = new FormData();
      formData.append('file', file,imgCatalogPost +"-" + this.fileListIMG[0].name);
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }


    this.servicesService.CreatePost(post).subscribe((post)=>{
      if(post["id"] != null){
        this.router.navigate(["/post-details/"+post["id"]]);

      }
      else{
        this.message = "login ou mot de passe incorrecte "
      }




    })


  }
  fileList : FileList =null;
  fileListFILE : FileList =null;
  fileListTXT : FileList =null;
  fileListIMG : FileList =null;
  onFileChanged(type,event) {

    if(type == "postimg"){
      this.fileList = event.target.files;

    }
    else if (type == "file"){
      this.fileListFILE = event.target.files;
      console.log(this.fileListFILE[0].name);

    }
    else if(type == "txt"){
      this.fileListTXT = event.target.files;

    }
    else if(type == "img"){
      this.fileListIMG = event.target.files;

    }
  }

  handleFileInput(files :FileList){

    this.fileToupload = files.item(0);
    var reader = new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl = event.target.result;

    }
    var file = reader;
    reader.readAsDataURL(this.fileToupload);

  }



  UpdatePost(){

    var EditedPost = new Post();
    EditedPost =  this.post;
    EditedPost.title    = this.importForm.get("title").value ;
    EditedPost.content =  this.importForm?.value?.content;
    EditedPost.img = EditedPost.img;


    var imgPost =  "imgPost"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') + '.jpg';
    var filePost =  "file"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') ;
    var txtPost =  "txtPost"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') ;
    var imgCatalogPost =  "imgCatalogPost"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en') ;
    if (this?.fileList?.length > 0) {
      EditedPost.img =  imgPost;

      const file = this.fileList[0];
      const formData = new FormData();
      formData.append('file', file,imgPost );
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }
    if (this?.fileListFILE?.length > 0) {
      EditedPost.filePost =  filePost +"-" + this.fileListFILE[0].name;

      const file = this.fileListFILE[0];
      const formData = new FormData();
      formData.append('file', file,filePost +"-" + this.fileListFILE[0].name);
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }
    if (this?.fileListTXT?.length > 0) {
      EditedPost.txtPost =  txtPost +"-" + this.fileListTXT[0].name;

      const file = this.fileListTXT[0];
      const formData = new FormData();
      formData.append('file', file,txtPost +"-" + this.fileListTXT[0].name);
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }
    if (this?.fileListIMG?.length > 0) {
      EditedPost.imgCatalogPost =  imgCatalogPost  + "-" + this.fileListIMG[0].name ;

      const file = this.fileListIMG[0];
      const formData = new FormData();
      formData.append('file', file,imgCatalogPost +"-" + this.fileListIMG[0].name);
      this.servicesService.UploadFile(formData).subscribe(()=>{
      })
    }

    this.servicesService.UpdatePost(EditedPost.id,EditedPost).subscribe((post)=>{
      location.reload();

    })
  }


}
