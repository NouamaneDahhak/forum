import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { User } from '../DTO/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message="";
  importForm = this.formBuilder.group({
    email:  ["   Veuillez entrer votre email"],
    password : ["           veuillez entrer votre password"],

  });


  constructor(private router: Router,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {

    if(localStorage.getItem('userId') != undefined){
      this.router.navigate(["/"]);

    }


  }
  UserLogin(){
    var user = new User();
    user.email    =  this.importForm?.value?.email
    user.password =  this.importForm?.value?.password
    this.servicesService.UserLogin(user).subscribe((ListUsers)=>{
      if(ListUsers != null){

        localStorage.setItem('userId', ListUsers["id"].toString());
        this.router.navigate(["/"]);

      }
      else{
        this.message = "identifiant ou mot de passe incorrecte "
      }

    })
  }

}
