$(document).ready(function() {
    $('#aboutMe').hide();
});

$("#abtMe").click(function (){
    $('#bio').hide(200);
    $('#sideInfo').hide(200);
    $('#aboutMe').show(500);
});