

$("#login").click(function () {

   window.location.href = "orderList.html"

});
$("#logout").click(function () {

    window.location.href = "index.html"

});
$("#signup").on('click', function() {

    $.mobile.changePage("#signup_page", {
        transition: "flip",
        reverse: true
    }, true, true);

});
$("#go_login").on('click', function() {

        $.mobile.changePage("#login_page", {
        transition: "flip",
        reverse: true
    }, true, true);


});

$("#page1").on('swipeleft', function() {
    //alert("aa");

    $.mobile.changePage("#page2", {
        transition: "slide",
        reverse: false
    }, true, true);


});

$("#page2").on('swiperight', function() {
    //alert("aa");

    $.mobile.changePage("#page1", {
        transition: "slide",
        reverse: true
    }, true, true);


});

$("#page2").on('swipeleft', function() {
    //alert("aa");

    $.mobile.changePage("#page3", {
        transition: "slide",
        reverse: false
    }, true, true);


});

$("#page2").on('swiperight', function() {
    //alert("aa");

    $.mobile.changePage("#page1", {
        transition: "slide",
        reverse: true
    }, true, true);


});

$("#page3").on('swiperight', function() {
    //alert("aa");

    $.mobile.changePage("#page2", {
        transition: "slide",
        reverse: true
    }, true, true);


});







