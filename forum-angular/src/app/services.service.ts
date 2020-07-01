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
  CreateUser(User){
    return this.http.post<User>('/api/users/register',User)
  }
  GetAllPosts(){
    return this.http.get<Array<Post>>('/api//posts')
  }

  CreatePost(Post){
    return this.http.post<Post>('/api/posts',Post)

  }

}
