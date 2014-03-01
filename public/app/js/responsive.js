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
    }, 10);  
});
