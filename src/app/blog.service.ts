import {EventEmitter, Injectable} from '@angular/core';

import {Blog} from './blog/blog.model';

@Injectable()
export class BlogService {

  private blogs: Blog[] = [
    new Blog('post1', 'content1'),
    new Blog('Ankit Bio Data', 'smarty'),
    new Blog('post4', 'content4'),
    new Blog('post5', 'content5'),
    new Blog('post6', 'content6'),
    new Blog('post7', 'content7'),
    new Blog('post8', 'content8'),
    new Blog('post9', 'content9'),
    new Blog('post10', 'content10'),
    new Blog('post11', 'content11')
  ];

  getBlogs() {
return this.blogs.slice();
  }

  getBlog(index: number) {
return this.blogs[index];
  }

  getNewBlog(title: string, content: string) {
 this.blogs.push(new Blog(title, content));
  }
}
