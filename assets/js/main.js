// body preloader
$(window).on('load', function () {
  setTimeout(function () { // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
  }, 3500);
});

// mega menu - wsmenu
arrow = '<span class="wsmenu-click"><i class="wsmenu-arrow bi bi-chevron-down"></i></span>';

$(function () {
  $('#wsnavtoggle')['click'](function () {
    $('.wsmenucontainer')['toggleClass']('wsoffcanvasopener')
  });
  $('.overlapblackbg')['click'](function () {
    $('.wsmenucontainer')['removeClass']('wsoffcanvasopener')
  });
  $('.wsmenu-list> li')['has']('.wsmenu-submenu')['prepend'](arrow);
  $('.wsmenu-list > li')['has']('.megamenu')['prepend'](arrow);
  $('.wsmenu-click')['click'](function () {
    $(this)['toggleClass']('ws-activearrow')['parent']()['siblings']()['children']()['removeClass']('ws-activearrow');
    $('.wsmenu-submenu, .megamenu')['not']($(this)['siblings']('.wsmenu-submenu, .megamenu'))['slideUp']('slow');
    $(this)['siblings']('.wsmenu-submenu')['slideToggle']('slow');
    $(this)['siblings']('.megamenu')['slideToggle']('slow')
  });
  $('.wsmenu-list > li > ul > li')['has']('.wsmenu-submenu-sub')['prepend']('<span class="wsmenu-click02"><i class="wsmenu-arrow bi bi-chevron-down"></i></span>');
  $('.wsmenu-list > li > ul > li > ul > li')['has']('.wsmenu-submenu-sub-sub')['prepend']('<span class="wsmenu-click02"><i class="wsmenu-arrow bi bi-chevron-down"></i></span>');
  $('.wsmenu-click02')['click'](function () {
    $(this)['children']('.wsmenu-arrow')['toggleClass']('wsmenu-rotate');
    $(this)['siblings']('.wsmenu-submenu-sub')['slideToggle']('slow');
    $(this)['siblings']('.wsmenu-submenu-sub-sub')['slideToggle']('slow')
  });
});

// // menu slider
// var myCarousel = document.getElementById('myCarousel')

// myCarousel.addEventListener('slide.bs.carousel', function () {
//   // do something...
// })

// plus minus button
$(document).ready(function () {
  $('.button-minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.button-plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});

// hero slider
$(document).ready(function () {
  $('.carouselhero').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  }).slickAnimation();
});

// hero fluid slider
$(document).ready(function () {
  $('.carouselHeroFluid').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// deal zone slider
$(document).ready(function () {
  $('.carouselDeal').slick({
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prevDeal'),
    nextArrow: $('.nextDeal'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// deal zone fluid - slider
$(document).ready(function () {
  $('.carouselDealFluid').slick({
    autoplay: true,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $('.prevDeal'),
    nextArrow: $('.nextDeal'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// partner slider
$(document).ready(function () {
  $('.carouselPartner').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        }
      }
    ]
  });
});

// testimonial slider
$(document).ready(function () {
  $('.carouselTestimonials').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

// On Scroll back to top
$(window).on('scroll', function () {

  // Back Top Button
  if ($(window).scrollTop() > 500) {
    $('.scrollup').addClass('back-top');
  } else {
    $('.scrollup').removeClass('back-top');
  }
});

// On Click Section Switch
// used for back-top
$('[data-type="section-switch"]').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    if (target.length > 0) {

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// init tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// product slider
$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });
});

// modal open show product gallery
$('.modal').on('shown.bs.modal', function (e) {
  $('.slider-for').slick('setPosition');
  $('.slider-nav').slick('setPosition');
});

// zoom product gallery

function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX / zoomer.offsetWidth * 100
  y = offsetY / zoomer.offsetHeight * 100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

// Add active class to the current button (highlight it)
$(function () {
  $('#dashboard li a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
  $('#dashboard li a').click(function () {
    $(this).parent().addClass('active').siblings().removeClass('active')
  })
});


