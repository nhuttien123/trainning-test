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
        breakpoint: 992,
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
