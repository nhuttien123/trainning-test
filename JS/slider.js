$(document).ready(function () {
  $(".banner-items").slick({
    prevArrow:
      "<button type='button' class='slick-button slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-button slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 768,
      },
    ],
  });
});
