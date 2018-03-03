$(function() {

  var count = 0;

  $(".opening").delay(1000).queue(function(){
    $(this).css("opacity", 0);
    $(".content").css("display", "flex");
  });

  // $(".content").delay(1250).queue(function(){
  //   $(this).show();
  // });


  $(".content").delay(1300).queue(function(){
    $(".opening").hide();
    $(this).css("opacity", 1);
  });

  $(".menu_icon").on('click', function() {
    $(this).toggleClass("active");
    $(".content").toggleClass("sidebar_open");
  });

  $(".set_button").on('click', function() {
    console.log(111)
    $(this).css("width", "60px").html("<img class='loading' src='loading.svg'>")

    if(count%2 == 0) {
      count++;
      setTimeout(function() {
        $(".set_button").css("width", "80%").html("GOOD NIGHT").addClass("set_button_finish")

        $(".circle").removeClass("circle_animation").addClass("circle_animation2");
      }, 1000)
    }else {
      setTimeout(function() {
        count++;
        $(".set_button").css("width", "80%").html("SET AN TIMER").removeClass("set_button_finish")

        $(".circle").removeClass("circle_animation2").addClass("circle_animation");
        
        
      }, 1000)
    }

    
    // $(this).delay(2000).css("width", "80%").html("");
  })

  // $(".set_button_finish").on('click', function() {
  //   $(this).css("width", "60px").html("<img class='loading' src='loading.svg'>")

  //   $(".set_button_finish").delay(1000).queue(function() {
  //     $(this).css("width", "80%").html("GOOD NIGHT").removeClass("set_button_finish").addClass("set_button")
  //   })
  //   // $(this).delay(2000).css("width", "80%").html("");
  // })

  // $(".set_button_finish").on('click', function() {
  //   $(this).css("width", "60px").html("<img class='loading' src='loading.svg'>")

  //   $(".set_button").delay(1000).queue(function() {
  //     $(this).css("width", "80%").html("GOOD NIGHT").addClass("set_button_finish")
  //   })
  //   // $(this).delay(2000).css("width", "80%").html("");
  // })


})