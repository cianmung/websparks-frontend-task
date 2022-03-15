$(document).ready(function () {
  $(".carousel-slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  // $(window).on("resize", function () {
  //   if ($(window).width() < 1000) {
  //     let scrollY = $(window).scrollTop();
  //     $(".home-page-banner-image-container").css(
  //       "background-position",
  //       "left " + scrollY + "px"
  //     );
  //   }
  // });
});
