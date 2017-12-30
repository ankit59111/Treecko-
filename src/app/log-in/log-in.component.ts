import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
@ViewChild('f') signInForm: NgForm;
userName: '';
  onSubmit() {
    console.log(this.signInForm);
this.userName = this.signInForm.value.userName;
  }

}
