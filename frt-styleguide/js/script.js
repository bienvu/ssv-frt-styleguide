/*jslint browser: true*/
/*global $, jQuery, Modernizr, enquire*/
(function (window, document, $) {
  var $html = $('html'),
    mobileOnly = "screen and (max-width:47.9375em)", // 767px.
    mobileLandscape = "(min-width:30em)", // 480px.
    tablet = "(min-width:48em)"; // 768px.

  // Add  functionality masonry.
  var $masonry = $('.masonry').imagesLoaded(function () {
    $masonry.masonry({
      itemSelector: ".masonry__item",
      columnWidth: ".masonry__item",
      percentPosition: true
    });
  });

  (function () {
    $('document').ready(function () {
      //Toggle Menu
      $('.menu-bars').click(function (e) {
        if ($(this).hasClass('is-show')) {
          $(this).removeClass('is-show');
          $(this).parent().next().slideUp();
        }else {
          $(this).addClass('is-show');
          $(this).parent().next().slideDown();
        }
       
        //body scroll hidden
        if($('body').hasClass('no-scroll')) {
          $('body').removeClass('no-scroll');
        }else {
          $('body').addClass('no-scroll');
        }
      });

      // toggle menu expend
      $('.menu-expend').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('is-show')) {
          $(this).removeClass('is-show');
        }else {
          $(this).addClass('is-show');
        }
      });

      //toggle box-filter mobile
      $('.box-filter__title').click(function() {
        if($(this).hasClass('is-show')) {
          $(this).removeClass('is-show');
          $('.box-filter__list').slideUp();
        }else {
          $(this).addClass('is-show');
          $('.box-filter__list').slideDown();
        }
      });

      // scroll top
      $('.js-scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
      });

      //slick for box-hero
      $('.js-slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
          breakpoint: 1024,
          settings: {
            dots: false,
            arrows: false
          }
        }]
      });

      //js lightbox where click to icon-resize
      $('.icon-resize').click(function() {
        $(this).parents(".js-lightbox").lightGallery({
          mode: 'lg-fade',
          getCaptionFromTitleOrAlt: false
        });
      });

      // slider box-gallery
      $('.js-slider--default').slick({
        asNavFor: '.js-slider--thumnail',
        arrows: false,
        responsive: [{
          breakpoint: 768,
          settings: {
            arrows: true,
          }
        }]
      });

      $('.js-slider--thumnail').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '51px',
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        asNavFor: '.js-slider--default',
        responsive: [{
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
            centerMode: false
          }
        }]
      });

      //scroll an element
      $('.js-scroll-down').click(function() {
        var $temp = $('.header').height();
        var $next = $(this).parent().parent().next().offset().top - $temp;
        $('html, body').animate({
          scrollTop: $next
        }, 'slow');
      });

      //js read more
      $('.js-read-more').click(function(e) {
        e.preventDefault();
        if($('.read-more').hasClass('is-show')) {
          $('.read-more').removeClass('is-show');
          $(this).text('READ MORE >');
        }else {
          $('.read-more').addClass('is-show');
          $(this).text('READ LESS >');
        }
      });
    });
  })();
}(this, this.document, this.jQuery));
