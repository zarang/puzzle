

$("#listWork").click(function () {

   window.location.href = "orderList.html"

});
$("#go_main").click(function () {

    window.location.href = "index.html"

});

$("#page1").on('swipeleft', function() {
	//alert("aa");

                $.mobile.changePage("#page2", {
                    transition: "slide",
                    reverse: false
                }, true, true);
});

$("#page2").on('swiperight', function() {

    $.mobile.changePage("#page1", {
        transition: "slide",
        reverse: true
    }, true, true);

});

$("#page2").on('swipeleft', function() {

                $.mobile.changePage("#page3", {
                    transition: "slide",
                    reverse: false
                }, true, true);
});

$("#page2").on('swiperight', function() {

                $.mobile.changePage("#page1", {
                    transition: "slide",
                    reverse: true
                }, true, true);
});

$("#page3").on('swiperight', function() {

                $.mobile.changePage("#page2", {
                    transition: "slide",
                    reverse: true
                }, true, true);
});







