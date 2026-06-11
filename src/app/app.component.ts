import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Job_Application_Form_3';

  @ViewChild('jobForm') jobForm !: NgForm;

  onSubmit(){
    if(this.jobForm.invalid){
      return this.jobForm.control.markAllAsTouched()
    }
    this.jobForm.resetForm();
  }
}
