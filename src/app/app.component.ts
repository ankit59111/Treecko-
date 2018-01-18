import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'grgregregre';
  private idName = '';

  constructor(private route: ActivatedRoute) {
console.log(route);
  }
  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        console.log(param);
      }
    );
  }
}
