import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Http, Response} from '@angular/http';


import {ActivatedRoute, Params, Router} from '@angular/router';



import {ServerService} from '../../server-service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @ViewChild('f') coment: NgForm;
  title: 'xvy';
  postdate: 'juh';
  d = new Date().toDateString().toString().slice(4);
  comments: any[];
  textareaVlue: string;
  id: number;

  constructor(private serverService: ServerService,
              private route: ActivatedRoute, private http: Http) {
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
        this.title = individualPost.title;
        this.postdate = individualPost.date;
        this.comments = this.serverService.setComments(individualPost);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  onSubmit() {
    this.textareaVlue = this.coment.value.fullComments;
    if (this.coment.value.fullComments != null) {
      this.http.post(`http://assignment-server.herokuapp.com/comments`, {
        body: this.textareaVlue,
        postId: this.id
      }).subscribe(
        (response) => {console.log('succesfully posted');
        }
      );
    }
    setTimeout(this.getComments(), 5000);
    this.coment.reset();
  }

  getComments() {
    this.serverService.getPost(this.id).subscribe(
      (response: Response) => {
        const individualPost = response.json();
        this.comments = this.serverService.setComments(individualPost);
        console.log(this.comments);
      });
  }
}
