import { SearchProfilComponent } from './profile/search-profil/search-profil.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PostsComponent } from './posts/posts/posts.component';
import { HomeComponent } from './home/home/home.component';
import { AddPostComponent } from './posts/add-post/add-post/add-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'byCategory/1', component: HomeComponent ,data : {data : 'category',id:'1'} },
  { path: 'byCategory/2', component: HomeComponent ,data : {data : 'category',id:'2'} },
  { path: 'byCategory/3', component: HomeComponent ,data : {data : 'category',id:'3'} },
  { path: 'byCategory/4', component: HomeComponent ,data : {data : 'category',id:'4'} },
  { path: 'byUser/:idUser', component: HomeComponent ,data : {data : 'user'} },
  { path: 'add-post', component: AddPostComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent ,data : {update :false} },
  { path: 'sign-up-update/:idUser', component: SignUpComponent  ,data : {update :true}},
  { path: 'post-details/:id', component: PostDetailsComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: 'search-profil', component: SearchProfilComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
