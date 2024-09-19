import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit, OnInit {
  activeFaqTab: string = '';
  @ViewChild('faq') faq!: ElementRef;

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    $(window).scroll(function () {
      const scroll = $(window).scrollTop();
      if (scroll >= 40) {
        $('.header_main').addClass('header-fixed');
      } else {
        $('.header_main').removeClass('header-fixed');
      }
    });
  }

  ngAfterViewInit(): void {
    $('.clientsslider').owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      dots: true,
    });

    $('.whyus_slider').owlCarousel({
      loop: true,
      nav: true,
      items: 1,
      dots: false,
    });
    $('.meetingocal_slider').owlCarousel({
      loop: true,
      nav: true,
      items: 1,
      dots: true,
    });

    $('.Compliance_slider').owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      dots: true,
    });

    $('.dropdownicon .menu_link').click((e: any) => {
      var active = $(this).parent().hasClass('active');
      $('.mobilemenus_box').removeClass('active');
      if (active) {
      } else {
        $(this).parent().addClass('active');
      }
    });

    // FAQ
    $('.faq_box_head').click((e: any) => {
      $('.faq_box').removeClass('active');
      $(this).parent().addClass('active');
    });

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      centerPadding: '20%',
      centerMode: true,
      asNavFor: '.slider-nav',
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '15%',
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerPadding: '5%',
          },
        },
      ],
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      centerMode: true,
      arrows: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });

    // FAQ
    // FAQ ss
    this.route.fragment.subscribe((frag) => {
      if (frag) {
        setTimeout(() => {
          this.faq.nativeElement.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'start',
          });
        }, 0);
      }
    });
  }

  activeFaq(faq: string) {
    if (this.activeFaqTab !== faq) {
      this.activeFaqTab = faq;
    } else {
      this.activeFaqTab = '';
    }
  }
}
