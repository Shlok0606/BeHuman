//POPUP MOTION





$("button").click(function(){
  var a=new Audio("Audio/MouseClick.mp3");
  a.play();
});

$("a").click(function(){
  var a=new Audio("Audio/MouseClick.mp3");
  a.play();
});

$(".popupButton ").click(function() {
  $(".popup").fadeOut();
  $(".data").css("opacity", "1");
  $(".opaque").css("opacity", "1");

});

$("body").click(function() {
  $(".popup").fadeOut();
  $(".data").css("opacity", "1");
  $(".opaque").css("opacity", "1");

});




$(".contribution").toggle();

$(".contriButton").click(function() {

  $(".contribution").fadeToggle();

});

$(".end").hide();
$(".endButton").click(function() {
  $(".end").fadeToggle();
})
