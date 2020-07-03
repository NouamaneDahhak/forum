import { Category } from './../../DTO/Category';
import { User } from './../../DTO/User';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  message="";
  idUser = null;
  listCategory:Array<Category>;


  importForm = this.formBuilder.group({
    email:  [""],
    password : [""],

  });
  constructor(private router: Router,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {

    if(localStorage.getItem('userId') != undefined){
      this.idUser =  localStorage.getItem('userId');

    }
    this.servicesService.GetAllCategory().subscribe((categorys) => {
      this.listCategory = categorys
    })
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

}
