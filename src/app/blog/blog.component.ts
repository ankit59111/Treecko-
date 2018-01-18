import {Component, OnInit, Output} from '@angular/core';
import {Response} from '@angular/http';
import {ServerService} from '../server-service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit{
  blogs: any[];


  constructor(private serverService: ServerService) {}

  ngOnInit() {
this.serverService.getAllPosts().subscribe(
  (response: Response) => {
    const data = response.json();
    this.blogs = data;
     console.log(data);
  }
);
  }



}
