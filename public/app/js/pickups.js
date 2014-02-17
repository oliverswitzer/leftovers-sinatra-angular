//websocket
var scheme   = "ws://";
var uri      = scheme + window.document.location.host + "/";
var ws       = new WebSocket(uri);

ws.onopen    = function()  { console.log('websocket opened'); };
ws.onclose   = function()  { console.log('websocket closed'); };
ws.onmessage = function(m) { debugger;console.log('websocket message: ' +  JSON.parse(m.data)); };
// var rest_name_addy = JSON.parse(JSON.parse(m.data)[0].value)
// var food_desp = JSON.parse(m.data)[1].value
// var meals = JSON.parse(m.data)[2].value
// var closing_date = JSON.parse(m.data)[3].value
// var closing_time = JSON.parse(m.data)[4].value


// custom_parallax.js

$(function() {
  
  //custom parallax
  $(window).scroll(function() {   //for parallax effect on hero
    var $bgimg = $('#angular-background');
    var yPos = -($(this).scrollTop() / 5);
    var coords = '50% '+ yPos + 'px';
    $bgimg.css("background-position", coords);
  }); 

  $(window).resize(function() {
    var tableWidth = $(".container").width();
    $('.container').css("margin-left", -tableWidth/2);
  });

  setInterval(function(){
    $("tr").on("click",function(){
      $this = $(this);
      $this.addClass("lightblue");
      $("tr").not($this).removeClass("lightblue");

      //Add button to selected row/pickup
      $(".confirm-pickup-btn").hide() //hide all other buttons
      
      //var element = $("<a href='#'><input type='button'>Confirm</button></a>");
      // element.prop({
      //     'href': '#/pickups/' + $this.data("id"),
      //     'id': 'pickup-confirm-button',
      //     'class': 'btn'
      // }); 
      $this.find("button").show();
      // element.text("Confirm Pickup");
      // element.appendTo($this);
      // element.click(function(){ });
    });

    var $sections = $('.section'),
      $bgimg = $('#angular-background'),
      $sectionContainer = $('#section_container'),
      windowHeight = $(window).height();

    $sectionContainer.css("top", windowHeight)

    $.each([$bgimg], function() {
      $(this).css("height", windowHeight);
    })
  },100);
    



  
})


