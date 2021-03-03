//POPUP MOTION
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
