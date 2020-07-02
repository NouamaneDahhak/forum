import { Reaction } from './../../../DTO/Reaction';
import { ServicesService } from './../../../services.service';
import { FormBuilder } from '@angular/forms';
import { Post } from './../../../DTO/Post';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  listPosts:Array<Post>
  reactions:Array<Reaction> ;
  countLiked:number = 0
  countDisLiked:number = 0
  constructor(private formBuilder: FormBuilder , private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.servicesService.GetAllPosts().subscribe((posts)=>{
      this.listPosts = posts as Array<Post>
    })

  }






}
