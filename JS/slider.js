$(document).ready(function () {
  $(".banner-items").slick({
    prevArrow:
      "<button type='button' class='slick-button slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-button slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 992,
      },
    ],
  });
});

$(document).ready(function () {
  $(".section-service-slide").slick({
    prevArrow:
      "<button type='button' class='slick-button slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-button slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: true,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".gallery-slide").slick({
    prevArrow:
      "<button type='button' class='slick-button slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-button slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: "5px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          centerMode: false,
          slidesToShow: 1,
        },
      },
    ],
  });
});

const openToggle = document.getElementById("toggle");
let isShow = false;

openToggle.addEventListener("click", () => {
  isShow = true;
  if (isShow == true) {
    document.getElementById("toggle-menu").style.left = "0";
  } else {
    document.getElementById("toggle-menu").style.left = "-100%";
  }
});

const closeToggle = document.getElementById("close-toggle");

closeToggle.addEventListener("click", () => {
  isShow = false;
  if (isShow == true) {
    document.getElementById("toggle-menu").style.left = "0";
  } else {
    document.getElementById("toggle-menu").style.left = "-100%";
  }
});
