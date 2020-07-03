import { Reaction } from './../../../DTO/Reaction';
import { ServicesService } from './../../../services.service';
import { FormBuilder } from '@angular/forms';
import { Post } from './../../../DTO/Post';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'home-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  idUser = null;

  listPosts:Array<Post>
  reactions:Array<Reaction> ;
  countLiked:number = 0
  countDisLiked:number = 0
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder , private servicesService: ServicesService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') != undefined){
      this.idUser = localStorage.getItem('userId');

    }
    this.servicesService.GetAllPosts().subscribe((posts)=>{
      this.listPosts = posts as Array<Post>
    })

  }

  like(post:Post,like){
    if(this.idUser == null){
      alert("Login First");
    }
    else{


      (post.nblike == null)? post.nblike = 0 :post.nblike ;
      (post.nbdislike == null)? post.nbdislike = 0 :post.nblike ;

      var EditedPost = new Post();
      EditedPost =  post;
      if(like == true){ EditedPost.nblike = post.nblike+1; } else {EditedPost.nbdislike = post.nbdislike+1;}



      this.servicesService.UpdatePost(post.id,EditedPost).subscribe((post)=>{
        var _post = post as Post
        console.log(_post);
        this.likeDislike(like,post.id);

      })
    }
  }

  likeDislike(bool,idPost){
    var reaction = new Reaction();
    reaction.postId= +idPost;
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
