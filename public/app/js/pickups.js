// custom_parallax.js

$(function() {
  var $sections = $('.section'),
      $bgimg = $('#angular-background'),
      $sectionContainer = $('#section_container'),
      windowHeight = $(window).height();

  console.log(windowHeight);
  $sectionContainer.css("margin-top", windowHeight)

  $.each([$sections, $bgimg], function() {
    $(this).css("height", windowHeight);
  })


  //custom parallax
  $(window).scroll(function() {   //for parallax effect on hero
    var $bgimg = $('#angular-background');
    var yPos = -($(this).scrollTop() / 5);
    var coords = '50% '+ yPos + 'px';
    $bgimg.css("background-position", coords);
  }); 
})
