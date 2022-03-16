$(document).ready(function () {
  $(".carousel-slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $.ajax({
    type: "GET",
    url: "./data/news.json",
    dataType: "json",
    success: function (data) {
      data.forEach((news) => {
        $(".each-news-today").append(
          '<p class="news-date">' + news.date + "</p>"
        );
        $(".each-news-today").append(
          '<p class="news-headline">' + news.headline + "</p>"
        );
        $(".each-news-today").append('<hr class="solid-divider">');
      });
    },
    error: function (error, text, thrown) {
      console.error(error);
    },
  });
});

$(window).scroll(function () {
  var scrolledY = $(window).scrollTop();
  $(".mobile-background-image-container").css(
    "background-position",
    "center " + scrolledY + "px"
  );
  if (scrolledY < 66) {
    $(".home-page-banner-image-container").css(
      "marginTop",
      "-" + scrolledY + "px"
    );
  }
});
