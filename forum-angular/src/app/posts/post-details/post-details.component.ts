import { User } from './../../DTO/User';
import { Reaction } from './../../DTO/Reaction';
import { Comment } from './../../DTO/Comment';
import { Post } from './../../DTO/Post';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post:Post = null;
  comments:Array<Comment> ;
  reactions:Array<Reaction> ;
  idPost = null;
  idUser = null;

  listUserLiked:Array<User> =[];
  listUserDisLiked:Array<User> =[];
  countLiked:number = 0
  countDisLiked:number = 0

  importForm = this.formBuilder.group({
    content:  [null],

  });

  constructor(private router:Router,private route: ActivatedRoute,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') != undefined){
      this.router.navigate(["/"]);
      this.idUser = localStorage.getItem('userId');

    }


    this.idPost = this.route.snapshot.paramMap.get('id');


    this.servicesService.GetPostById(this.idPost).subscribe((post) => {
      if(post != null){
        this.post= post;
      }
      else{
      }

    })
    this.servicesService.GetPostReactionById(this.idPost).subscribe((reactions) => {
      if(reactions != null){
        this.reactions= reactions;
        this.getCountLike();

      }
      else{
      }

    })
    this.servicesService.GetCategoryByPostId(this.idPost).subscribe((comment) => {
      if(comment != null){
        this.comments= comment;
      }
      else{
      }

    })


  }

  toArray(Comment: Array<Comment>) {
    console.log(Comment);
    return Object.keys(Comment).map(key => Comment[key])
  }

  CreateComment(){
    var comment = new Comment();
    comment.content = this.importForm?.value?.content;
    comment.postId=this.idPost;
    comment.userId=this.idUser;
    comment.date = "02/03/2012"

    this.servicesService.CreateComment(comment).subscribe((comment) => {
      if(comment != null){
        location.reload();
      }
      else{
      }

    })
  }

  getCountLike(){
    for(let reaction of this.reactions){
      if(reaction.like){
        this.countLiked++;
        this.listUserLiked.push(reaction.user);

      }
      else{
        this.countDisLiked++;
        this.listUserDisLiked.push(reaction.user);
      }

    }
  }

  likeDislike(bool){
    var reaction = new Reaction();
    reaction.postId= this.idPost;
    reaction.userId= this.idUser;
    reaction.date  = "02/03/2012";
    reaction.like  = bool;
    this.servicesService.CreateReaction(reaction).subscribe((reaction) => {
      if(reaction != null){
        location.reload();

      }
      else{
      }

    })
  }

}
