//websocket
var scheme   = "ws://";
var uri      = scheme + window.document.location.host + "/";
var ws       = new WebSocket(uri);

ws.onopen    = function()  { console.log('websocket opened'); };
ws.onclose   = function()  { console.log('websocket closed'); };
ws.onmessage = function(m) { angular.element($('#all-pickups')).scope().getPickups(); };
// angular.element($('#all-pickups')).scope().getPickups();
// var rest_name_addy = JSON.parse(JSON.parse(m.data)[0].value)
// var food_desp = JSON.parse(m.data)[1].value
// var meals = JSON.parse(m.data)[2].value
// var closing_date = JSON.parse(m.data)[3].value
// var closing_time = JSON.parse(m.data)[4].value


// custom_parallax.js

$(function() {
  //custom parallax
  // $(window).scroll(function() {   //for parallax effect on hero
  //   var $bgimg = $('#angular-background');
  //   var yPos = -($(this).scrollTop() / 5);
  //   var coords = '50% ' + yPos + 'px';
  //   $bgimg.css("background-position", coords);
  // }); 

  // $(window).resize(function() {
  //   var tableWidth = $(".container").width();
  //   $('.container').css("margin-left", -tableWidth/1.92);
  // });

  $(window).load(function(){
    

    $(".table").on("click", "tr", function(){
      $this = $(this);
      $this.addClass("lightblue");
      $("tr").not($this).removeClass("lightblue");

      //Add sbutton to selected row/pickup
      $(".confirm-pickup-btn").hide() //hide all other buttons
      
      //var element = $("<a href='#'><input type='button'>Confirm</button></a>");
      // element.prop({
      //     'href': '#/pickups/' + $this.data("id"),
      //     'id': 'pickup-confirm-button',
      //     'class': 'btn'
      // }); 
      $this.find("table button").show();
      // element.text("Confirm Pickup");
      // element.appendTo($this);
      // element.click(function(){ });
    });
 
  
    setTimeout(function() {

      // var tableWidth = $(".container").width();
      // $('.container').css("margin-left", -tableWidth/1.92);
      
      var $sections = $('.section'),
      $bgimg = $('#angular-background'),
      $sectionContainer = $('#section_container'),
      windowHeight = $(window).height();

      $sectionContainer.css("top", windowHeight)

      $bgimg.css("height", windowHeight);

      if( /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { //if on a mobile device
        $("body").css("font-size", "2em");
        $bgimg.remove();
        $(".container").css("margin-top", 0)
        $sectionContainer.css("top", 0)


        $('label').css("font-size", "1.2em");
      }

      }, 150);
  });
})


