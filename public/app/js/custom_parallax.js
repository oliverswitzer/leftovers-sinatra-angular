// custom_parallax.js


console.log("WHAT")
$(window).scroll(function() {   //for parallax effect on hero
  var $bgimg = $('#angular-background');
  var yPos = -($(this).scrollTop() / 5);
  var coords = '50% '+ yPos + 'px';
  $bgimg.css("background-position", coords);
  console.log($bgimg.css("background-position"))
});