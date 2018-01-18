import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';


import {ActivatedRoute, Params} from '@angular/router';



import {ServerService} from '../../server-service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @ViewChild('f') coment: NgForm;
  comments: any[];
  textareaVlue: string;
  blog: any;
  date= new Date().toDateString.toString().slice(4);
  id: number;
  constructor(private serverService: ServerService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'] + 1;
        console.log(this.id);

      }
    );
  }

  ngOnInit() {
     this.serverService.getPost(this.id).subscribe(
      (response: Response) => {
        const individualPost = response.json();
        this.blog = individualPost;
        this.comments = individualPost.comments;
      }
    );


  }
onSubmit() {
    this.textareaVlue = this.coment.value.fullComments;
    if (this.coment.value.fullComments != null) {
     console.log(this.textareaVlue);
    }
  this.coment.reset();
}
}
