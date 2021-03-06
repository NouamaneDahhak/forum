import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Post } from 'src/app/DTO/Post';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'side-home',
  templateUrl: './side-home.component.html',
  styleUrls: ['./side-home.component.css']
})
export class SideHomeComponent implements OnInit {

  idUser = null;
  importForm = this.formBuilder.group({
    title:  ["",Validators.required],
    categoryId : [""],
    date : ["blog-2-806x440.png"],
    userId : [1],

  });
  show = false;
  groupDans=""


  constructor(public dialog: MatDialog, private router:Router,private route: ActivatedRoute,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {


    if(this.router.url === '/byCategory/1'){
      this.groupDans ="dans le forum"
    }
    else if(this.router.url === '/byCategory/2'){
      this.groupDans ="dans Agora"

    }
    else if(this.router.url === '/byCategory/3'){
      this.groupDans ="dans la Salle Modérateur"

    }
    else if(this.router.url === '/byCategory/4'){
      this.groupDans ="dans le CATALOGUE"

    }

    if(this.route.snapshot.data['data'] == 'category' && this.route.snapshot.data['id'] != 4){
         this.show = true;

     }
    if(localStorage.getItem('userId') != undefined){
      this.idUser = localStorage.getItem('userId');

    }
  }
  addGroup(){
    var post = new Post();
    post.title    =  this.importForm?.value?.title
    post.date =  formatDate(new Date(), 'dd/MM/yyyy h:mm', 'en');
    post.userId =  this.idUser
    post.categoryId = +this.route.snapshot.data['id'];
    post.nbComment =  "0"
    post.views =  "0"
    post.nblike = 0
    post.nbdislike = 0
    post.epingler = false
    post.postId = 0;

    this.servicesService.CreatePost(post).subscribe((post)=>{
      if(post["id"] != null){

        location.reload();
      }
      else{

      }

    })

  }



}


