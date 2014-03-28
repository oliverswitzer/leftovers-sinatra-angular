// responsive.js

$(function () {

  // $(window).resize(function() {
  //     var tableWidth = $(".container").width();
  //     $('.container').css("margin-left", -tableWidth/1.92);
  //   });

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
