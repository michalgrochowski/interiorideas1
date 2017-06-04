// First Slick carousel that contains projects

$(document).ready(function(){
  $('.projects__wrapper').slick({
    centerMode: true,
    accessibility: true,
    draggable: false,
    slidesToShow: 1,
    infinite: false,
    centerPadding: '0',
    arrows: true,
    nextArrow: '<span class="icon-right-open projects__nav--next"></span>',
    prevArrow: '<span class="icon-left-open projects__nav--prev"></span>',
    appendArrows: $(".projects__nav"),
  });
});

// Second Slick carousel that contains photos for the projects

$(document).ready(function(){
  $('.projects__gallery').slick({
    slidesToShow: 3,
    arrows: false,
    infinite: true,
    centerMode: true,
    accessibility: true,
    autoplay: true,
    centerPadding: '0',
    nextArrow: '<span class="icon-right-open"></span>',
    prevArrow: '<span class="icon-left-open"></span>',
    appendArrows: $(".projects__nav--inner"),
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        draggable: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        draggable: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        draggable: true,
      }
    }
  ]
  });
});

// Change the size of the navbar after scrolling 50px from top

$(window).on("scroll touchmove", function () {
    $('.nav').toggleClass("nav--small", $(document).scrollTop() > 70);
    $('.nav__logo').toggleClass("nav__logo--small", $(document).scrollTop() > 70);
    $(".nav__list--mobile").toggleClass("nav__list--mobile-scrolled", $(document).scrollTop() > 70);
});

// Open mobile menu after clicking hamburger icon

$(".nav__hamburger").on("click touch", function() {
    $(".nav__hamburger").hide();
    $(".nav__close-menu").show();
    $(".nav__list--mobile").slideToggle();
})

// Close mobile menu after clicking X icon

$(".nav__close-menu").on("click touch", function() {
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
})

// Mobile - After clicking a menu option slide to corresponding section and change the icon from hamburger to X and other way around

$(document).on('click', '.nav__link--mobile', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top -80;
    $('body, html').animate({scrollTop: pos});
    $(".nav__hamburger").show();
    $(".nav__close-menu").hide();
    $(".nav__list--mobile").slideToggle();
});

// After clicking a menu option slide to corresponding section

$(document).on('click', '.nav__link', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = $id.offset().top -40;
    $('body, html').animate({scrollTop: pos});
});

// Show an arrow icon that send you to the top after scrolling 800px down

$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

// Click event that scrolls page to the top after clicking an arrow key with "scroll-top" class

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 300) {
    $('.scroll-top').fadeIn("slow");
  } else {
    $('.scroll-top').fadeOut("slow");
  }
});