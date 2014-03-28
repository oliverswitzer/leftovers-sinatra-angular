// responsive.js

$(function () {
  var $sections = $('.section'),
      $bgimg = $('#angular-background'),
      $sectionContainer = $('#section_container'),
      windowHeight = $(window).height();

  $sectionContainer.css("top", windowHeight);
  $bgimg.css("height", windowHeight);

<<<<<<< HEAD
  if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { //if on a mobile device
    $("body").css("font-size", "2em");
    $(".container").css("margin-top", 0);
    $(".container").css("width", "100%")
    $sectionContainer.css("top", 0);
    $('label').css("font-size", "1.2em");
  } else {
    $(window).scroll(function() {   //for parallax effect on hero
      var yPos = -($(this).scrollTop() / 5);
      var coords = '50% ' + yPos + 'px';
      $bgimg.css("background-position", coords);
    }); 
  } 
=======
  setTimeout(function() {
    // var windowHeight = $(window).height();
    // var tableWidth = $(".container").width();
    // $('.container').css("margin-left", -tableWidth/1.92);
    $('.bgimg').css("height", windowHeight);
    if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#pac-input").css("width", "1.2em");
    }
    }, 10);  
>>>>>>> c37490d292e5cb19c3256f4108b81bef881300b4
});
