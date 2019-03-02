import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  loading = false;
  subjectContact = [
    {value: 'general_information', label: 'Demandes informations'},
    {value: 'price_information', label: 'Demandes prix'},
    {value: 'bug_report', label: 'Report de bug'},
  ];

  constructor(
      private spinner: NgxSpinnerService,
      private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.contactForm = this.fb.group({
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required],
      'email': ['', Validators.required],
      'subject': ['', Validators.required],
      'message': ['', Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }

    this.spinner.show();
    console.log(this.contactForm.value);
  }
}
