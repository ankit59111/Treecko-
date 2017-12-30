import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Blog} from '../blog.model';
import {BlogService} from "../../blog.service";

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
@Input() blog: Blog;
@Input() index: number;
  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }


}
