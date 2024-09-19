import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  selectedImage: string = 'assets/img/flag.png';
  unselectedImage: string = 'assets/img/sar.png';
  selectedText: string = 'EN';
  unselectedText: string = 'عربى.';
  selectedCode: string = 'en';
  unselectedCode: string = 'ar';
  activeTab: string = '';
  scroll: number = 0;
  @ViewChild('contactUs') contactUs!: ElementRef;
  @Output() changeLanguageEvent: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router) {}
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    const self = this;

    $(window).scroll(function () {
      self.scroll = $(window).scrollTop();
      if (self.scroll >= 40) {
        $('.header_main').addClass('header-fixed');
      } else {
        $('.header_main').removeClass('header-fixed');
      }
    });
    const lang = localStorage.getItem('lang');
    switch (lang) {
      case 'en':
        this.selectedText = 'EN';
        this.selectedCode = 'en';
        this.selectedImage = 'assets/img/flag.png';
        this.unselectedCode = 'ar';
        this.unselectedText = 'عربى.';
        this.unselectedImage = 'assets/img/sar.png';
        break;
      case 'ar':
        this.selectedText = 'عربى.';
        this.selectedCode = 'ar';
        this.selectedImage = 'assets/img/sar.png';
        this.unselectedText = 'EN';
        this.unselectedCode = 'en';
        this.unselectedImage = 'assets/img/flag.png';
        break;
      default:
        this.selectedText = 'EN';
        this.selectedCode = 'en';
        this.selectedImage = 'assets/img/flag.png';
        this.unselectedCode = 'ar';
        this.unselectedText = 'عربى.';
        this.unselectedImage = 'assets/img/sar.png';
        break;
    }
  }

  changeLanguage() {
    var unselectedImage = this.selectedImage;
    this.selectedImage = this.unselectedImage;
    this.unselectedImage = unselectedImage;
    var unselectedText = this.selectedText;
    this.selectedText = this.unselectedText;
    this.unselectedText = unselectedText;
    var unselectedCode = this.selectedCode;
    this.selectedCode = this.unselectedCode;
    this.unselectedCode = unselectedCode;
    this.changeLanguageEvent.emit(this.selectedCode);
  }

  openSidebar() {
    document.getElementsByTagName('body')[0].classList.add('h100');
  }

  closeCanvas() {
    document.getElementsByTagName('body')[0].classList.remove('h100');
  }

  dismissCollapse(route: string, frag?: string) {
    if (frag) {
      this.router.navigate([route], { fragment: frag });
    } else {
      this.router.navigate([route]);
    }
    $('#offcanvasExample').offcanvas('hide');

    $('#exampleModal').modal('hide');
    document.getElementsByTagName('body')[0].classList.remove('h100');
  }
}
