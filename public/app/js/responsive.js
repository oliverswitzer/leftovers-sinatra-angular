// responsive.js

$(function () {
  var $sections = $('.section'),
      $bgimg = $('#angular-background'),
      $sectionContainer = $('#section_container'),
      windowHeight = $(window).height();

  $sectionContainer.css("top", windowHeight);
  $bgimg.css("height", windowHeight);

  setTimeout(function() {
    // var windowHeight = $(window).height();
    // var tableWidth = $(".container").width();
    // $('.container').css("margin-left", -tableWidth/1.92);
    $('.bgimg').css("height", windowHeight);
    if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#pac-input").css("width", "1.2em");
    }
    }, 10);  
});
