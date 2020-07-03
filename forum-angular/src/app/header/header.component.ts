import { Category } from './../DTO/Category';
import { ServicesService } from './../services.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:boolean = true;
  listCategory:Array<Category>;
  idUser = null;

  constructor(private router:Router,private route: ActivatedRoute,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') == undefined){
      this.login = true;
    }
    else{
      this.login = false;
      this.idUser= localStorage.getItem('userId');

    }
    this.servicesService.GetAllCategory().subscribe((categorys) => {
      this.listCategory = categorys
    })

  }
  Logout(){
    localStorage.clear();
    this.router.navigate(["/"]);
    this.login = true;
    location.reload();

  }
  Login(){
    localStorage.clear();
    this.router.navigate(["/login"]);
    this.login = true;


  }

}
