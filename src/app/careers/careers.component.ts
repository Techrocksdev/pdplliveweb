import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.scss',
})
export class CareersComponent implements AfterViewInit {
  @ViewChild('jobs') jobs!: ElementRef;
  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    this.route.fragment.subscribe((frag) => {
      if (frag) {
        setTimeout(() => {
          this.navigate();
        }, 0);
      }
    });
  }
  navigate() {
    this.jobs.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start',
    });
  }
}
