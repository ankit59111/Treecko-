import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})
export class BlogItemComponent implements OnInit {
@Input() blog: any;
@Input() index: number;
  constructor() { }

  ngOnInit() {
  }


}
