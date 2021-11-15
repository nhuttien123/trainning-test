$(document).ready(function () {
  $(".banner-items").slick({
    prevArrow:
      "<button type='button' class='slick-button slick-prev pull-left'><img src='./images/left.png' alt=''></button>",
    nextArrow:
      "<button type='button' class='slick-button slick-next pull-right'><img src='./images/right.png' alt=''></button>",
    dots: true,
    responsive: [
      {
        breakpoint: 992,
      },
    ],
  });

  $(".section-service-slide").slick({
    prevArrow:
      "<button type='button' class='slick-button slick-prev pull-left'><img src='./images/left.png' alt=''></button>",
    nextArrow:
      "<button type='button' class='slick-button slick-next pull-right'><img src='./images/right.png' alt=''></button>",
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

  $(".gallery-slide").slick({
    prevArrow:
      "<button type='button' class='slick-button slick-prev pull-left'><img src='./images/left.png' alt=''></button>",
    nextArrow:
      "<button type='button' class='slick-button slick-next pull-right'><img src='./images/right.png' alt=''></button>",
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
});
