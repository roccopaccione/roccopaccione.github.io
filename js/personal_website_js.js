$(document).ready(
    function () {
        $("#aboutMe").hidden();
    });
$("#abtMe").click(function () {
    $(this).show().fadeIn(600);
},
    function (){
    $(".container").hide().fadeOut(400);
    }
);

