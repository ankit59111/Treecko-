import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Blog} from './blog.model';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  blogs: Blog[];


  constructor(private blogService: BlogService) {}

  ngOnInit() {
this.blogs = this.blogService.getBlogs();
  }
  openBlog() {

  }


}
