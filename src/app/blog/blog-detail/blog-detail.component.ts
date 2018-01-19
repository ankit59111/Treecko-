import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';


import {ActivatedRoute, Params, Router} from '@angular/router';



import {ServerService} from '../../server-service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  d = new Date().toDateString().toString().slice(4);
  @ViewChild('f') coment: NgForm;
  comments: any[];
  textareaVlue: string;
  blog: any;
  id: number;
  constructor(private serverService: ServerService,
              private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'] + 1;
      }
    );
  }

  ngOnInit() {
     this.serverService.getPost(this.id).subscribe(
      (response: Response) => {
        const individualPost = response.json();
        this.blog = individualPost;
        this.comments = this.serverService.setComments(individualPost);
      }
    );
  }

onSubmit() {
    this.textareaVlue = this.coment.value.fullComments;
    if (this.coment.value.fullComments != null) {
      this.serverService.postComment({
        body: this.textareaVlue,
        postId: this.id
      });
    }
  this.serverService.getPost(this.id).subscribe(
    (response: Response) => {
      const individualPost = response.json();
      this.comments = this.serverService.setComments(individualPost);
    }
  );
  this.coment.reset();
}
}
