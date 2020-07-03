import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Post } from 'src/app/DTO/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-home',
  templateUrl: './side-home.component.html',
  styleUrls: ['./side-home.component.css']
})
export class SideHomeComponent implements OnInit {

  idUser = null;



  constructor(private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {

  }


}
