import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {Router} from '@angular/router';

import {ServerService} from '../server-service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  d = new Date().toDateString().toString().slice(4);
  @ViewChild('f') signInForm: NgForm;
  newPost = {
    author: '',
    title: '',
    date: this.d
  };
  constructor(private serverService: ServerService, private router: Router) { }

  onSubmit() {
    this.newPost.author = this.signInForm.value.author;
    this.newPost.title = this.signInForm.value.title;
    this.serverService.newPost(this.newPost);
    console.log(this.newPost);
    console.log(this.newPost.date);
    this.signInForm.reset();
    this.router.navigate(['/'], { replaceUrl: true });
  }


  ngOnInit() {
  }

}
