import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewPostComponent } from './new-post/new-post.component';


import {RouterModule, Routes} from '@angular/router';
import { BlogItemComponent } from './blog/blogItem/blog-item.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {BlogService} from './blog.service';
import {ServerService} from './server-service';


const appRoutes: Routes = [
  { path: '', component: BlogComponent },
    { path: 'posts/:id', component: BlogDetailComponent },
  { path: 'new-post', component: NewPostComponent },
  { path: 'login', component: LogInComponent },
  { path: 'SignUp', component: SignUpComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    BlogItemComponent,
    LogInComponent,
    BlogDetailComponent,
    SignUpComponent,
    NewPostComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
