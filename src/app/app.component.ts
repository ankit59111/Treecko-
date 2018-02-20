import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private route: ActivatedRoute, private spinnerservice: Ng4LoadingSpinnerService) {
  }
  ngOnInit() {
    this.spinnerservice.show();
    this.route.params.subscribe(
      (param: Params) => {
        console.log(param);
         this.spinnerservice.hide();
      }
    );
  }

}
