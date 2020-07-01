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


  message="";
  importForm = this.formBuilder.group({
    title:  ["title"],
    content : ["content"],
    img : ["blog-2-806x440.png"],
    date : ["blog-2-806x440.png"],
    userId : [1],

  });
  constructor(private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {
  }
  CreatePost(){
    var post = new Post();
    post.title    =  this.importForm?.value?.title
    post.content =  this.importForm?.value?.content
    post.img =  this.importForm?.value?.img
    post.date =  this.importForm?.value?.date
    post.userId =  this.importForm?.value?.userId
    this.servicesService.CreatePost(post).subscribe((post)=>{
      if(post["id"] != null){
       console.log(post);
      }
      else{
        this.message = "login ou mot de passe incorrecte "
      }

    })

  }

}
