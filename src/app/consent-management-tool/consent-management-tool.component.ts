import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-consent-management-tool',
  templateUrl: './consent-management-tool.component.html',
  styleUrl: './consent-management-tool.component.scss',
})
export class ConsentManagementToolComponent {
  @ViewChild('form') form!: ElementRef;
  onClick() {
    this.form.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start',
    });
  }
}
