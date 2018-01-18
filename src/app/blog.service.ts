import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {Blog} from './blog/blog.model';
import {ServerService} from './server-service';

@Injectable()
export class BlogService implements OnInit{

  constructor(private serverService: ServerService){
  }
  private blogs: Blog[];

  ngOnInit() {
// this.blogs = this.blogService.getBlogs();
    this.serverService.getAllPosts().subscribe(
      (response: Response) => {
        const data = response.json();
        this.blogs = data;
        console.log(data);
      }
    );
  }
  getBlogs() {
return this.blogs;
  }

  getBlog(index: number) {
return this.blogs[index];
  }

  getNewBlog(title: string, content: string) {
 this.blogs.push(new Blog(title, content));
  }
}
