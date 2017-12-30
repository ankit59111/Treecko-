import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

import {BlogService} from '../blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
title: string;
content: string;
file: any;
  @ViewChild('f') postSoubmitting: NgForm;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }
  onUpload(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.postSoubmitting.control.setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split('/')[1]
        });
      };
    }
  }
 onSubmit() {
    console.log(this.file);
this.title = this.postSoubmitting.value.title;
this.content = this.postSoubmitting.value.content;
if (this.title && this.content != null) {
  this.blogService.getNewBlog(this.title, this.content);
}
this.postSoubmitting.reset();
}
}
