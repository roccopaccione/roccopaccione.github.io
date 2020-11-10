$(document).ready(function() {
    $('#aboutMe').hide();
});

$("#abtMe").click(function (){
    $('#bio').hide(200);
    },
    function () {
        $('#sideInfo').hide(200);
    },
    function () {
        $('.navContent').show(500);
    }
);