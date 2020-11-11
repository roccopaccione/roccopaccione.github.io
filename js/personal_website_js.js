$(document).ready(function() {
    $('#aboutMe').hide();
});

let click = $("#abtMe").click(
    function () {
        $('#bio').hide(200);
    },
    function () {
        $('#sideInfo').hide(200);
    },
    function () {
        $('.navContent').show(500);
    }
);