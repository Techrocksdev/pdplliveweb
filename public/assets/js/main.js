// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 40) {
//     $(".header_main").addClass("header-fixed");
//   } else {
//     $(".header_main").removeClass("header-fixed");
//   }
// });

$(".clientsslider").owlCarousel({
  loop: true,
  nav: false,
  items: 1,
  dots: true,
});

$(".whyus_slider").owlCarousel({
  loop: true,
  nav: true,
  items: 1,
  dots: false,
});
$(".meetingocal_slider").owlCarousel({
  loop: true,
  nav: true,
  items: 1,
  dots: true,
});

$(".Compliance_slider").owlCarousel({
  loop: true,
  nav: false,
  items: 1,
  dots: true,
});
// $(window).scroll(function () {
//   var scroll = $(window).scrollTop();
//   if (scroll >= 40) {
//     $(".header_main").addClass("header-fixed");
//   } else {
//     $(".header_main").removeClass("header-fixed");
//   }
// });

// FAQ
$(".faq_box_head").click(function (e) {
  $(".faq_box").removeClass("active");
  $(this).parent().addClass("active");
});
// FAQ
