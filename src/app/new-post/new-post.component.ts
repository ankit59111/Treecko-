import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';


import {ServerService} from '../server-service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
d = new Date().toDateString.toString().slice(4);
  @ViewChild('f') signInForm: NgForm;
  newPost = {
    author: '',
    title: '',
    date: this.d
  };
  constructor(private serverService: ServerService) { }

  onSubmit() {
    this.newPost.author = this.signInForm.value.userName;
    this.newPost.title = this.signInForm.value.userName;
    this.serverService.newPost(this.newPost);
  }


  ngOnInit() {
  }

}
