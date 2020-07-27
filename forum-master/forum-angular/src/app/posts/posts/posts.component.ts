import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/DTO/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  listPosts:Array<Post>

  constructor(private formBuilder: FormBuilder , private servicesService: ServicesService) { }

  ngOnInit(): void {

    this.servicesService.GetAllPosts().subscribe((posts)=>{
      this.listPosts = posts as Array<Post>


    })
  }



}
