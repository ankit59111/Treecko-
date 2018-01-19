import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Response} from '@angular/http';


import {ServerService} from '../server-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@ViewChild('f') search: NgForm;
searchitem = '';
  constructor(private serverService: ServerService) {}

  ngOnInit() {
  }
  onSubmit() {
    this.searchitem = this.search.value.search;
    this.serverService.setFilterString(this.searchitem);
    this.serverService.getFilteredData().subscribe(
      (response: Response) => {
        const data = response.json();
        this.serverService.setFilteredData(data);
      }
    );
    this.search.reset();
  }
}
