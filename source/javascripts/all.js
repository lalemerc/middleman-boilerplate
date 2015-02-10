//= require jquery
//= require bootstrap-sprockets
//= require_tree .
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  $(".window-height").css("height", $(window).height());
});

$(document).ready(function() {
  // navbar transition jQuery script
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 0) {
      $(".navbar").css({
        "background": "rgba(255, 255, 255, 0.7)",
        "box-shadow": "0 0 2px grey"
      });
    }
    else {
      $(".navbar").css({
        "background": "transparent",
        "box-shadow": "0 0 0px transparent"
      });
    }
  });
});