import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idCategory = null;
  constructor(private router: Router) { }

  ngOnInit(): void {

    if(this.router.url === '/byCategory/4'){
      this.idCategory =4

    }
  }

}
