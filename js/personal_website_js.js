$(document).ready(function (){
$("#aboutMe").click(function () {
    $(this).show().fadeIn(600);
},
    function (){
    $(".container").hide().fadeOut(400);
    })
});

