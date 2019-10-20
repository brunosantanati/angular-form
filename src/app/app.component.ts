import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isSubmitted = false;

  templateForm(value: any) {
    alert(JSON.stringify(value));
  }

  submitForm(form: NgForm) {
    this.isSubmitted = true;
      if(!form.valid) {
        return false;
      } else {
        alert(JSON.stringify(form.value))
      }
   }

}

//example based in https://www.positronx.io/angular-8-radio-buttons-tutorial-with-examples/