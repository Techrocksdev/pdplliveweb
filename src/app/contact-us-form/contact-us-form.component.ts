import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.scss',
})
export class ContactUsFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private appService: AppService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.contactForm = this._fb.group({
      name: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=^.{1,64}$)([\w\-\+]+[.]?[\w\-\+]*){1,3}@([\w-]+\.){1,3}[a-zA-Z]{2,10}$/
          ),
        ],
      ],
      contact: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      designation: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.appService.addContact(this.contactForm.value).subscribe({
      next: () => {
        $('#thankyouModal').modal('show');
        this.contactForm.reset();
      },
      error: () => {
        this.toastr.error('Some Error occured');
      },
    });
  }
}
