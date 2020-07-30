import { MatTableDataSource } from '@angular/material/table';
import { Reaction } from './../../../DTO/Reaction';
import { ServicesService } from './../../../services.service';
import { FormBuilder } from '@angular/forms';
import { Post } from './../../../DTO/Post';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'home-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})



export class ContentComponent implements OnInit {

  dataSource : MatTableDataSource<Post>;


  displayedColumns = ['Title'];

  idUser = null;
  idCategory = null;
  idGroup = null;
  title = null;

  listPosts:Array<Post>
  Post:Post = null;
  listGroup:Array<Post>
  reactions:Array<Reaction> ;
  countLiked:number = 0
  countDisLiked:number = 0
  Usertype = null;
  constructor(public dialog: MatDialog, private router: Router,private route: ActivatedRoute,private _snackBar: MatSnackBar,private formBuilder: FormBuilder , private servicesService: ServicesService) {
    if(localStorage.getItem('userId') != undefined){
      this.idUser = localStorage.getItem('userId');
      this.Usertype = localStorage.getItem('Usertype');
      console.log(this.idUser);

    }

  }

  ngOnInit(): void {
    this.idCategory = null;
    this.idGroup = null;
    this.title = "";
    if(localStorage.getItem('userId') != undefined){
      this.idUser = localStorage.getItem('userId');
      console.log(this.idUser);

    }
    console.log();

    if(this.route.snapshot.data['data'] == undefined){
      this.servicesService.GetAllPosts().subscribe((posts)=>{
        this.listPosts = posts as Array<Post>
      })
    }
    else if(this.route.snapshot.data['data'] == "category")
    {
      this.idCategory = this.route.snapshot.data['id'];

      this.servicesService.GetAppPostsByCategory(this.idCategory).subscribe((posts)=>{

        this.listPosts = posts as Array<Post>
        this.dataSource = new MatTableDataSource(this.listPosts);

      })
      this.servicesService.GetAppGroupsByCategory(this.idCategory).subscribe((posts)=>{
        this.listGroup = posts as Array<Post>
      })
    }
    else if(this.route.snapshot.data['data'] == "group")
    {
      this.idGroup = this.route.snapshot.paramMap.get('idGroup');
      this.title = this.route.snapshot.paramMap.get('title');

      this.servicesService.GetAppPostsByGroups(this.idGroup).subscribe((posts)=>{
        this.listPosts = posts as Array<Post>
      })
      this.servicesService.GetAppPostsByGroups(this.idGroup).subscribe((posts)=>{
        this.listGroup = posts as Array<Post>
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
  returnImage(img){
    if(img == "default-img.png" || img == "avatar.png"){
      return "assets/image/" + img;

    }
    else {
      return "api/posts/getImage/" +img +"/"+ "none";

    }
  }
  selectedItem(row:Post){

this.Post = row;
  }






}

