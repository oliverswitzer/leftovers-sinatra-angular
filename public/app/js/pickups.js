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
      $("button").remove() //remove all other buttons
      var element = $(document.createElement("button"));
      element.prop({
          'href': '#',
          'id': 'pickup-confirm-button',
          'class': 'btn'
      }); 
      
      element.text("Confirm Pickup");
      element.appendTo($this);
      element.click(function(){ console.log('Pickup sold!');});
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


