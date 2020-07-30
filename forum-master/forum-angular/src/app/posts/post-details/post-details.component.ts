import { User } from './../../DTO/User';
import { Reaction } from './../../DTO/Reaction';
import { Comment } from './../../DTO/Comment';
import { Post } from './../../DTO/Post';
import { FormBuilder } from '@angular/forms';
import { ServicesService } from './../../services.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';

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
  Usertype = null;
  constructor(private router:Router,private route: ActivatedRoute,private formBuilder: FormBuilder,private servicesService:ServicesService) { }

  ngOnInit(): void {


    this.Usertype = localStorage.getItem('Usertype');

    this.idPost = this.route.snapshot.paramMap.get('id');


    this.servicesService.GetPostById(this.idPost).subscribe((post) => {
      if(post != null){
        this.post= post;
        if(localStorage.getItem('userId') != undefined || localStorage.getItem('userId') != null ){
          this.idUser = localStorage.getItem('userId');
          var view :String =  (this.post?.views== null)?   0+"" :this.post?.views ;

          var EditedPost = new Post();
          EditedPost =  this.post;
          EditedPost.views = (Number(view)+1) + "";

          this.servicesService.UpdatePost(this.post.id,EditedPost).subscribe((post)=>{
          })
        }
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


  returnImage(img){
    if(img == "default-img.png" || img == "avatar.png"){
      return "assets/image/" + img;

    }
    else {
      return "api/posts/getImage/" +img +"/"+ "none";

    }
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
    comment.date =formatDate(new Date(), 'dd/MM/yyyy  h:mm', 'en');

    this.servicesService.CreateComment(comment).subscribe((comment) => {

      if(comment != null){
        (this.post.nbComment == null)? this.post.nbComment = 0+"" :this.post.nbComment ;

        var EditedPost = new Post();
        EditedPost =  this.post;
        EditedPost.nbComment= (Number(EditedPost.nbComment)+1) + "";

        this.servicesService.UpdatePost(this.post.id,EditedPost).subscribe((post)=>{
          location.reload();

        })
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

  likeDislike(like){
    var reaction = new Reaction();
    reaction.postId= this.idPost;
    reaction.userId= this.idUser;
    reaction.date  = "02/03/2012";
    reaction.like  = like;




    (this.post.nblike == null)? this.post.nblike = 0 :this.post.nblike ;
    (this.post.nbdislike == null)? this.post.nbdislike = 0 :this.post.nblike ;

    var EditedPost = new Post();
    EditedPost =  this.post;
    if(like == true){ EditedPost.nblike = this.post.nblike+1; } else {EditedPost.nbdislike = this.post.nbdislike+1;}



    this.servicesService.UpdatePost(this.post.id,EditedPost).subscribe((post)=>{
    })


    this.servicesService.CreateReaction(reaction).subscribe((reaction) => {
      if(reaction != null){
        location.reload();

      }
      else{
      }

    })



  }

}
