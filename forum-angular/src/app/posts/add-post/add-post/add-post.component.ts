import { Router } from '@angular/router';
import { DatePipe, formatDate } from '@angular/common';
import { Category } from './../../../DTO/Category';
import { Post } from './../../../DTO/Post';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../../services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {


   listCategory: Array<Category>
  message="";
  importForm = this.formBuilder.group({
    title:  ["title"],
    content : ["content"],
    categoryId : [1],
    img : ["blog-2-806x440.png"],
    date : ["blog-2-806x440.png"],
    userId : [1],

  });
  constructor(private router:Router,private datePipe: DatePipe,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.servicesService.GetAllCategory().subscribe((category) => {
      if (category != null){
        this.listCategory = category;
      }
      else{
      }

    })


  }

  CreatePost(){

    var post = new Post();
    post.title    =  this.importForm?.value?.title
    post.content =  this.importForm?.value?.content
    post.img =  this.importForm?.value?.img
    post.date =  formatDate(new Date(), 'dd/MM/yyyy h:mm', 'en');
    post.userId =  this.importForm?.value?.userId
    post.categoryId =  +this.importForm?.value?.categoryId
    post.nbComment =  "0"
    post.views =  "0"
    post.nblike = 0
    post.nbdislike = 0
    post.epingler = false
    this.servicesService.CreatePost(post).subscribe((post)=>{
      if(post["id"] != null){
        this.router.navigate(["/post-details/"+post["id"]]);

      }
      else{
        this.message = "login ou mot de passe incorrecte "
      }

    })

  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }
}
