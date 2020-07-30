import { MatAccordion } from '@angular/material/expansion';
import { formatDate } from '@angular/common';
import { Post } from 'src/app/DTO/Post';
import { Category } from './../../DTO/Category';
import { User } from './../../DTO/User';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  message="";
  idUser = null;
  listCategory:Array<Category>;
  listGroup:Array<Post>;
  idCategory = null;
  idGroup = null;
  groupDans=""



  importForm = this.formBuilder.group({
    email:  [""],
    password : [""],

  });
  Usertype =null;
  addgroup = this.formBuilder.group({
    text:  [""],

  });
  constructor(public dialog: MatDialog, private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {
    this.Usertype = localStorage.getItem('Usertype');

    this.idCategory = null;
    this.idGroup = null;

    if(this.route.snapshot.data['data'] == "category")
    {
      this.idCategory = this.route.snapshot.data['id'];


      this.servicesService.GetAppGroupsByCategory(this.idCategory).subscribe((posts)=>{
        this.listGroup = posts as Array<Post>
      })
    }

    if(localStorage.getItem('userId') != undefined){
      this.idUser =  localStorage.getItem('userId');

    }
    this.servicesService.GetAllCategory().subscribe((categorys) => {
      this.listCategory = categorys
    })


    if(this.router.url === '/byCategory/1'){
      this.groupDans ="forum"
    }
    else if(this.router.url === '/byCategory/2'){
      this.groupDans ="Agora"

    }
    else if(this.router.url === '/byCategory/3'){
      this.groupDans ="Salle Modérateur"

    }
    else if(this.router.url === '/byCategory/4'){
      this.groupDans ="CATALOGUE"

    }
  }

  UserLogin(){
    var user = new User();
    user.email    =  this.importForm?.value?.email
    user.password =  this.importForm?.value?.password
    this.servicesService.UserLogin(user).subscribe((ListUsers)=>{
      if(ListUsers != null){
        console.log(ListUsers);

        localStorage.setItem('userId', ListUsers["id"].toString());
        localStorage.setItem('Usertype', ListUsers["usertype"].toString());

       location.reload();
      }
      else{
        this.message = "login ou mot de passe incorrecte "
      }

    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  addGroup(){
    var post = new Post();
    post.title    =  this.addgroup?.value?.text
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


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
