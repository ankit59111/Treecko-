import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import {RouterModule, Routes} from '@angular/router';
import { PostComponent } from './post/post.component';
import { BlogItemComponent } from './blog/blogItem/blog-item.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import {BlogService} from './blog.service';


const appRoutes: Routes = [
  { path: '', component: BlogComponent },
    { path: 'username/:id', component: BlogDetailComponent },
  { path: 'login', component: LogInComponent },
  { path: 'SignUp', component: SignUpComponent },
  { path: 'post', component: PostComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogComponent,
    BlogItemComponent,
    LogInComponent,
    PostComponent,
    BlogDetailComponent,
    SignUpComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
