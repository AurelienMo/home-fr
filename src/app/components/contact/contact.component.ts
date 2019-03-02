import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonService} from '../../_services/http/common.service';
import {first} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ToastHelperService} from '../../_services/helpers/toast-helper.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  subjectContact = [
    {value: 'general_information', label: 'Demandes informations'},
    {value: 'price_information', label: 'Demandes prix'},
    {value: 'bug_report', label: 'Report de bug'},
  ];

  constructor(
      private spinner: NgxSpinnerService,
      private fb: FormBuilder,
      private commonService: CommonService,
      private router: Router,
      private toast: ToastHelperService,
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
    this.commonService
        .send(this.contactForm.value)
        .pipe(first())
        .subscribe(
            success => {
              this.spinner.hide();
              this.toast.show(
                  'success',
                  'Nous avons bien reçu votre demande, nous vous répondrons dans les plus bref délais.'
              );
              this.router.navigate(['/']);
            },
            error => {
              this.spinner.hide();
            }
        );
  }
}
