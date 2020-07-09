import { Reaction } from './DTO/Reaction';
import { Comment } from './DTO/Comment';
import { Category } from './DTO/Category';
import { User } from './DTO/User';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Post } from './DTO/Post';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  UserLogin(User){
    return this.http.post<User>('/api/users/login', User )
  }

  GetAllUsers(){
    return this.http.get<Array<User>>('/api/users')
  }
  GetAllCategory(){
    return this.http.get<Array<Category>>('/api/category')
  }
  GetPostReactionById(PostId){
    return this.http.get<Array<Reaction>>('/api/reactions/'+PostId)
  }
  CreateUser(User){
    return this.http.post<User>('/api/users/register',User)
  }
  UpdateUser(id,user){
    return this.http.post<User>('/api/users/update/'+id,user)
  }
  CreateReaction(Reaction){
    return this.http.post<Reaction>('/api/reactions',Reaction)
  }
  CreateComment(Comment){
    return this.http.post<Comment>('/api/comments',Comment)
  }
  GetAllPosts(){
    return this.http.get<Array<Post>>('/api/posts')
  }
  GetAppPostsByCategory(idCategory){
    return this.http.get<Array<Post>>('/api/posts/byCategory/'+idCategory)
  }
  GetAppPostsByUser(idUser){
    return this.http.get<Array<Post>>('/api/posts/byUser/'+idUser)
  }

  GetPostById(id){
    return this.http.get<Post>('/api/posts/'+id)
  }
  GetUserById(id){
    return this.http.get<User>('/api/users/'+id)
  }
  GetCategoryByPostId(id){
    return this.http.get<Array<Comment>>('/api/comments/'+id)
  }

  CreatePost(Post){
    return this.http.post<Post>('/api/posts',Post)
  }
  UpdatePost(id,Post){
    return this.http.post<Post>('/api/posts/update/'+id,Post)

  }

}
