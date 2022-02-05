$(document).ready(function(){
    $("#hotel-form").show();
    $("#tricket-form").hide();
    $("#place-form").hide();

   $("#hotel-btn span").addClass("line");
//    if click tricket
$("#ticet-btn").click(function(){
    $("#hotel-form").hide();
    $("#tricket-form").show();
    $("#place-form").hide();
})
$("#place-btn").click(function(){
    $("#hotel-form").hide();
    $("#tricket-form").hide();
    $("#place-form").show();
})
$("#homet-btn").click(function(){
    $("#hotel-form").show();
    $("#tricket-form").hide();
    $("#place-form").hide();
})
})