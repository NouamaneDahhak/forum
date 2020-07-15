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


  fileToupload :  File = null;
   listCategory: Array<Category>
   titleGroup = "";
  message="";
  idUser = null;
  imageUrl ="assets/image/default-img.jpg"
  importForm = this.formBuilder.group({
    title:  ["title"],
    content : ["content"],
    categoryId : [1],
    img : [""],
    date : ["blog-2-806x440.png"],
    userId : [""],

  });
  constructor(private route: ActivatedRoute,private router:Router,private datePipe: DatePipe,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {
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
    post.img =  "default-img.jpg";


    var imgPost =  "imgPost"+ this.importForm?.value?.userId + "-" + formatDate(new Date(), 'dd_MM_yyyy_h_mm_ss', 'en');
    if (this.fileList.length > 0) {
      post.img =  imgPost;

      const file = this.fileList[0];
      const formData = new FormData();
      formData.append('file', file,imgPost );
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
  onFileChanged(event) {

    this.fileList = event.target.files;
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




}
