import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {ActivatedRoute, Params} from '@angular/router';


import {Blog} from '../blog.model';
import {CommentModel} from '../comment.model';

import {BlogService} from '../../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @ViewChild('f') coment: NgForm;
  comments: CommentModel[] = [];
  textareaVlue: string;
  blog: Blog;
  id: number;
  constructor(private blogService: BlogService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.blog = this.blogService.getBlog(this.id);
      }
    );
  }

  ngOnInit() {
  }
onSubmit() {
    console.log(this.coment.value.fullComments == null);
    this.textareaVlue = this.coment.value.fullComments;
    if (this.coment.value.fullComments != null) {
      this.comments.push(new CommentModel(this.textareaVlue));

    }
  this.coment.reset();
}
}
