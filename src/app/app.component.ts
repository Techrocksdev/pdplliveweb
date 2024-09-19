import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'PDPL-consultants-V2';

  constructor(
    private translateService: TranslateService,
    public router: Router
  ) {}
  ngAfterViewInit(): void {
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      if (scroll >= 40) {
        $('.header_main').addClass('header-fixed');
      } else {
        $('.header_main').removeClass('header-fixed');
      }
    });
  }
  ngOnInit(): void {
    const lang = localStorage.getItem('lang');
    if (lang) {
      this.translateService.setDefaultLang(lang);
      this.translateService.use(lang);
    } else {
      localStorage.setItem('lang', 'en');
    }
  }

  changeLanguageEvent(event: string) {
    this.translateService.setDefaultLang(event);
    this.translateService.use(event);
    localStorage.setItem('lang', event);
  }
}
