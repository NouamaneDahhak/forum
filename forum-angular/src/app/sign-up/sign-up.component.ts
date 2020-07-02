import { FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../DTO/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


    message = '';
    importForm = this.formBuilder.group({
    email:  ['',Validators.required],
    password : ['',Validators.required],
    username : ['',Validators.required],

  });
  constructor(private router: Router,private formBuilder: FormBuilder , private servicesService: ServicesService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') != undefined){
      this.router.navigate(["/"]);

    }
  }
  CreateUser(){
    var user = new User();
    user.email    =  this.importForm?.value?.email
    user.password =  this.importForm?.value?.password
    user.username =  this.importForm?.value?.username
    this.servicesService.CreateUser(user).subscribe((user)=>{
      if(user["id"] != null){
       localStorage.setItem('userId', user["id"].toString());
       this.router.navigate(["/"]);

      }
      else{
        this.message = "login ou mot de passe incorrecte "
      }

    })
  }
}
