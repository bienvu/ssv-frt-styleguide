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

  // Toggle menu mobile
  // (function () {
  //   document.addEventListener('DOMContentLoaded', function(event) {
  //     var button = document.getElementsByClassName("button-menu")[0];
  //     button.addEventListener('click', function(e){
  //       this.classList.toggle("button-menu--animation");
  //     });
  //   });
  // })();

  (function () {
    $('document').ready(function () {
      $('.button-menu').click(function (e) {
        if ($(this).hasClass('is-show')) {
          $(this).removeClass('is-show');
          // $('.header').css('height', '65px');
          // $('.header').css('overflow', 'hidden');
          $(this).parent().next().slideUp();
          $('body').css('overflow', 'auto');
        }else {
          $(this).addClass('is-show');
          // $('.header').css('height', '100vh');
          // $('.header').css('overflow', 'auto');
          $(this).parent().next().slideDown(function() {
            // $(this).css('display', 'flex');
          });
          $('body').css('overflow', 'hidden');
        }
        return false;
      });

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
    });
  })();
  
  // Table responsive
  // Drupal.behaviors.tableResponsive = {
  //   attach: function (context, settings) {
  //     var $table = $('table', context);
  //     if ($table.length &&
  //       !$table.parent().hasClass('table-responsive')) {
  //       $table.not($table.find('table')).wrap('<div class="table-responsive"></div>');
  //     }
  //   }
  // };

}(this, this.document, this.jQuery));
