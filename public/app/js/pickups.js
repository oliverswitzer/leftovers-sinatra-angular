// custom_parallax.js

$(function() {
  


  //custom parallax
  $(window).scroll(function() {   //for parallax effect on hero
    var $bgimg = $('#angular-background');
    var yPos = -($(this).scrollTop() / 5);
    var coords = '50% '+ yPos + 'px';
    $bgimg.css("background-position", coords);
  }); 

  setTimeout(function(){
    $("tr").on("click",function(){
      $this = $(this);
      $this.addClass("lightblue");
      $("tr").not($this).removeClass("lightblue");

      //Add button to selected row/pickup
      $("button").hide() //hide all other buttons
      
      //var element = $("<a href='#'><input type='button'>Confirm</button></a>");
      // element.prop({
      //     'href': '#/pickups/' + $this.data("id"),
      //     'id': 'pickup-confirm-button',
      //     'class': 'btn'
      // }); 
      $this.find("button").show();
      // element.text("Confirm Pickup");
      console.log($this.find("button"));
      // element.appendTo($this);
      // element.click(function(){ });
    });

    var $sections = $('.section'),
      $bgimg = $('#angular-background'),
      $sectionContainer = $('#section_container'),
      windowHeight = $(window).height();

    console.log(windowHeight);
    $sectionContainer.css("margin-top", windowHeight)

    $.each([$sections, $bgimg], function() {
      $(this).css("height", windowHeight);
    })
  }, 2000
  );
  
})


