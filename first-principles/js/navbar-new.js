$(document).ready(function () {
    $(".jumbotron").load("navbar-home.html");

    $("ul.navbar-nav li").each(function () {
        $(this).on('click', function () {
            var elem = $(this);
            console.log(elem[0].innerHTML);
            console.log($("#contactlink"));
            $(".jumbotron").load(elem.attr('data-page')+".html");
        });
    });
});