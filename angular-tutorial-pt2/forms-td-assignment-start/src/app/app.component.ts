import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSubscirption = 'advanced';
  @ViewChild('f') subscriptionForm: NgForm;

  onSubmit(){
    console.log(this.subscriptionForm.value);
  }

}
