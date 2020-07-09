import { SearchProfilComponent } from './profile/search-profil/search-profil.component';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideHomeComponent } from './home/side-home/side-home.component';
import { ContentComponent } from './home/content/content/content.component';
import { AsideComponent } from './aside/aside/aside.component';
import { FooterComponent } from './footer/footer/footer.component';
import { AddPostComponent } from './posts/add-post/add-post/add-post.component';
import { HomeComponent } from './home/home/home.component';
import { PostsComponent } from './posts/posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
declare let $: any;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideHomeComponent,
    ContentComponent,
    AsideComponent,
    FooterComponent,
    AddPostComponent,
    HomeComponent,
    PostsComponent,
    ContactComponent,
    LoginComponent,
    PostDetailsComponent,
    SignUpComponent,
    UserDetailsComponent,
    SearchProfilComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule



  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
