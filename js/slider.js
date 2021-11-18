$(document).ready(function () {
  const prev =
    "<button type='button' class='slick-button slick-prev pull-left'><img src='./images/left.png' alt=''></button>";
  const next =
    "<button type='button' class='slick-button slick-next pull-right'><img src='./images/right.png' alt=''></button>";
  if ($(".banner-items").length > 0) {
    $(".banner-items").slick({
      prevArrow: prev,
      nextArrow: next,
      dots: true,

      responsive: [
        {
          breakpoint: 992,
        },
      ],
    });
  }
  if ($(".section-service-slide").length > 0) {
    var $status = $(".counter-info");
    var $slickElement = $(".section-service-slide");

    $slickElement.on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html(
          '<span class="current_slide">' +
            0 +
            i +
            '</span> / <span class="total_slides"> ' +
            0 +
            slick.slideCount +
            "</span>"
        );
      }
    );
    $(".section-service-slide").slick({
      prevArrow: prev,
      nextArrow: next,
      dots: false,
      infinite: true,

      responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".gallery-slide").length > 0) {
    $(".gallery-slide").slick({
      prevArrow: prev,
      nextArrow: next,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
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
  }

  if ($("#left") && $("#right")) {
    $(window).scroll(function () {
      let position = $(document).scrollTop();
      if (window.innerWidth > 1200) {
        let min = 200;
        let max = 1100;
        if (position > min && position < max) {
          $("#right").addClass("back-to-left").removeClass("hidden");
          $("#left").addClass("back-to-right").removeClass("hidden");
        } else {
          $("#right").removeClass("back-to-left").addClass("hidden");
          $("#left").removeClass("back-to-right").addClass("hidden");
        }
      } else if (window.innerWidth < 1200 && window.innerWidth > 991) {
        min = 370;
        max = 800;
        if (position > min && position < max) {
          $("#right").addClass("back-to-left").removeClass("hidden");
          $("#left").addClass("back-to-right").removeClass("hidden");
        } else {
          $("#right").removeClass("back-to-left").addClass("hidden");
          $("#left").removeClass("back-to-right").addClass("hidden");
        }
      }
      if (window.innerWidth < 991) {
        let minOfOrange = 400;
        let maxOfOrange = 1150;
        let minOfBlue = 600;
        let maxofBlue = 1640;
        if (position > minOfOrange && position < maxOfOrange) {
          $("#left").addClass("back-to-right").removeClass("hidden");
        } else {
          $("#left").removeClass("back-to-right").addClass("hidden");
        }
        if (position > minOfBlue && position < maxofBlue) {
          $("#right").addClass("back-to-left").removeClass("hidden");
        } else {
          $("#right").removeClass("back-to-left").addClass("hidden");
        }
      }

      if (position > 300) {
        $(".scroll-top").css("display", "block");
      } else {
        $(".scroll-top").css("display", "none");
      }
    });
  }

  if ($(".scroll-top").length > 0) {
    $(".scroll-top").click(function () {
      $("#header")[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  const counters = document.querySelectorAll(".value");
  if (counters.length > 0) {
    $(window).scroll(function () {
      const current = $(document).scrollTop();
      if (current > 200 && current < 1200) {
        const speed = 200;
        counters.forEach((counter) => {
          const animate = () => {
            const value = +counter.getAttribute("akhi");
            const data = +counter.innerText;

            const time = value / speed;
            if (data < value) {
              counter.innerText = Math.ceil(data + time);
              setTimeout(animate, 40);
            } else {
              counter.innerText = value;
            }
          };
          animate();
        });
      }
    });
  }

  const openToggle = document.getElementById("toggle");
  let isShow = false;
  if (openToggle) {
    openToggle.addEventListener("click", () => {
      isShow = true;
      if (isShow == true) {
        document.getElementById("toggle-menu").style.left = "0";
      } else {
        document.getElementById("toggle-menu").style.left = "-100%";
      }
    });
  }
  const closeToggle = document.getElementById("close-toggle");
  if (closeToggle) {
    closeToggle.addEventListener("click", () => {
      isShow = false;
      if (isShow == true) {
        document.getElementById("toggle-menu").style.left = "0";
      } else {
        document.getElementById("toggle-menu").style.left = "-100%";
      }
    });
  }
});
