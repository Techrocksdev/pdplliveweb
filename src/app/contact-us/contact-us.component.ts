import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent implements AfterViewInit {
  @ViewChild('form') form!: ElementRef;
  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.route.fragment.subscribe((frag) => {
      if (frag) {
        setTimeout(() => {
          this.form.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'start',
          });
        }, 0);
      }
    });
  }
}
