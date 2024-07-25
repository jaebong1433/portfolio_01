$(document).ready(function () {
  $(window).scroll(function () {
    let scrollT = $(this).scrollTop();
    if (scrollT > 1000) {
      $(".go_top").addClass("fix");
    } else {
      $(".go_top").removeClass("fix");
    }
  });

  $(".gnb > li ").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn().css({ "display": "flex" });
  });

  $(".gnb > li ").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
  });

  $(".caret_down").click(function () {
    $(".lang_depth2").stop().slideDown();
    $(".caret_up").show();
    $(".caret_down").hide();
  });

  $(".caret_up").click(function () {
    $(".lang_depth2").stop().slideUp();
    $(".caret_down").show();
    $(".caret_up").hide();
  });

  $(".ham").click(function () {
    $(".utilMenu").show();
    $(".mgnb_close").show();
    $(".ham").hide();
    $(".mgnb_wrap, .mgnb").fadeIn();
  });

  $(".mgnb_close").click(function () {
    $(".utilMenu").hide();
    $(".mgnb_close").hide();
    $(".ham").show();
    $(".mgnb_wrap").fadeOut();
  });

  $(".mgnb > ul > li").click(function () {
    var $this = $(this);
    var $mdepth2 = $this.find(".mdepth2");

    if ($this.hasClass("active")) {
      // 이미 활성화된 경우
      $mdepth2.slideUp();
      $this.removeClass("active");
    } else {
      // 활성화되지 않은 경우
      $this.addClass("active");
      $mdepth2.slideDown();
      $this.siblings().removeClass("active").find(".mdepth2").slideUp();
    }
  });

  //메인 배너 슬라이드
  const mb = new Swiper('.mb', {
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //퀵 메뉴 슬라이드
  const quick = new Swiper('.quick', {
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
      960: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //전시 슬라이드
  const exhibition = new Swiper('.exhibition', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //소장품 슬라이드
  const collection = new Swiper('.collection', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  //공지사항 슬라이드
  const notice = new Swiper('.notice', {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

}); //문서준비이벤트종료

