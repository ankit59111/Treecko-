import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {ServerService} from '../server-service';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {Ng4LoadingSpinnerComponent} from 'ng4-loading-spinner';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: any[];
   strToFilter = this.serverService.filterString;
   FilterStr: string = this.strToFilter;

  constructor(private serverService: ServerService,
              private spinnerservice: Ng4LoadingSpinnerService) {}

  ngOnInit() {
    this.spinnerservice.show();
     this.serverService.getAllPosts().subscribe(
      (response: Response) => {
        this.spinnerservice.hide();
        const data = response.json();

          this.blogs = this.serverService.setAllData(data);
      }
    );

  }



}
