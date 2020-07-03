import { Reaction } from './../../../DTO/Reaction';
import { ServicesService } from './../../../services.service';
import { FormBuilder } from '@angular/forms';
import { Post } from './../../../DTO/Post';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  idUser = null;
  idCategory = null;

  listPosts:Array<Post>
  reactions:Array<Reaction> ;
  countLiked:number = 0
  countDisLiked:number = 0
  constructor(private router: Router,private route: ActivatedRoute,private _snackBar: MatSnackBar,private formBuilder: FormBuilder , private servicesService: ServicesService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userId') != undefined){
      this.idUser = localStorage.getItem('userId');

    }
    console.log();

    if(this.route.snapshot.data['data'] == undefined){
      this.servicesService.GetAllPosts().subscribe((posts)=>{
        this.listPosts = posts as Array<Post>
      })
    }
    else if(this.route.snapshot.data['data'] == "category")
    {
      this.idCategory = this.route.snapshot.paramMap.get('idCategory');

      this.servicesService.GetAppPostsByCategory(this.idCategory).subscribe((posts)=>{
        this.listPosts = posts as Array<Post>
      })
    }
    else if(this.route.snapshot.data['data'] == "user")
    {
      this.servicesService.GetAppPostsByUser(this.route.snapshot.paramMap.get('idUser')).subscribe((posts)=>{
        this.listPosts = posts as Array<Post>
      })
    }







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
  epingler(post:Post,epingler){
    if(this.idUser == null){
      alert("Login First");
    }
    else{



      var EditedPost = new Post();
      EditedPost =  post;
      if(EditedPost.epingler == true){ EditedPost.epingler = false } else {EditedPost.epingler = true;}



      this.servicesService.UpdatePost(post.id,EditedPost).subscribe((post)=>{
        var _post = post as Post
        console.log(_post);

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
