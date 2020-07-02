import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  login:boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') == undefined){
      this.login = true;
    }
    else{
      this.login = false;

    }
  }
  Logout(){
    localStorage.clear();
    this.router.navigate(["/"]);
    this.login = true;


  }
  Login(){
    localStorage.clear();
    this.router.navigate(["/login"]);
    this.login = true;


  }

}
