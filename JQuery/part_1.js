var x = $('h1');

// You can easily edit the css properties:
x.css("color",'red');
x.css("background","blue");

// Multiple CSS properties at once:
var newCSS = {
  "color":"white",
  "background":"blue",
  "border":"red"
}

var newCSS = {
  "color":"white",
  "background":"red",
  "border":"10px solid yellow"
}

undefined
x.css(newCSS);


var lists = $('li');

var newCSSS = {
  "color":"white",
  "background":"blue",
  "border":"3px solid yellow"
}
undefined
lists.css(newCSSS);


lists.eq(0).css('background','green');
lists.eq(-1).css('background','green');

$('h1').text('NEW REPLACED TEXT')


$('h2').addClass('turnred');
$('h2').addClass('turnRed');
$('h3').addClass('turnBlue');
$('h3').removeClass('turnBlue');




$("input").eq(0).keypress(function(){
    $("input").eq(1).addClass("turnBlue");
})

$("input").eq(0).keydown(function(){
    $("input").eq(1).removeClass("turnBlue");
})

$("input").eq(0).keypress(function(event){
    console.log(event);
  })


  $('h1').on("dblclick",function() {
  $('h1').addClass('turnBlue');
})

$('input').eq(1).val("FADE OUT EVERYTHING");

$('input').eq(1).on("click",function(){
  $(".container").fadeOut(3000) ;
})


$('input').eq(1).on("click",function(){
  $(".container").slideUp(1000) ;
})


$("h1").hover(function(){
  alert("You entered p1!");
},
function(){
  alert("Bye! You now leave p1!");
});

$("input").focus(function(){
  $(this).css("background-color", "#cccccc");
});

$("input").blur(function(){
  $(this).css("background-color", "#ffffff");
});

$("h4").on("click", function(){
  $(this).hide();
});




$("p").click(function(){
  $("li").animate({height: "300px"});
});


$("p").click(function(){
  $("li").clearQueue();
});

$("#dly").click(function(){
  $(this).delay("slow").fadeIn();
});

$('input').eq(1).click(function(){
  $("#dly").fadeIn();
});
