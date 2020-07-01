import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { User } from '../DTO/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message="";
  importForm = this.formBuilder.group({
    email:  ["nouamanedahhak@gmail.com"],
    password : ["DAHHAK"],

  });


  constructor(private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {



  }
  UserLogin(){
    var user = new User();
    user.email    =  this.importForm?.value?.email
    user.password =  this.importForm?.value?.password
    this.servicesService.UserLogin(user).subscribe((ListUsers)=>{
      if(ListUsers != null){

      }
      else{
        this.message = "login ou mot de passe incorrecte "
      }

    })
  }

}
