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
      $('.button-menu').click(function (e) {
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

      // toggle menu extend
      $('.menu-extend').click(function(e) {
        e.preventDefault();
        if($(this).hasClass('is-show')) {
          $(this).removeClass('is-show');
          $(this).children('.menu').slideUp();
        }else {
          $(this).addClass('is-show');
          $(this).children('.menu').slideDown();
        }
      });

      // scroll top
      $('.js-scroll-top').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
      });

      //banner 
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

      //scroll an element
      $('.js-scroll-down').click(function() {
        var $next = $(this).parents('.box-hero').next().offset().top;
        $('html, body').animate({
          scrollTop: $next
        }, 'slow');
      });
    });
  })();
  
  //Table responsive
  Drupal.behaviors.tableResponsive = {
    attach: function (context, settings) {
      var $table = $('table', context);
      if ($table.length &&
        !$table.parent().hasClass('table-responsive')) {
        $table.not($table.find('table')).wrap('<div class="table-responsive"></div>');
      }
    }
  };

}(this, this.document, this.jQuery));
