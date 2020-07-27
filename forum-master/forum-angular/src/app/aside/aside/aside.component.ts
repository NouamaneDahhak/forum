import { Post } from 'src/app/DTO/Post';
import { Category } from './../../DTO/Category';
import { User } from './../../DTO/User';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

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
  constructor(public dialog: MatDialog, private route: ActivatedRoute,private router: Router,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {

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

        localStorage.setItem('userId', ListUsers["id"].toString());
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

}


@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
