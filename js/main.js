//<!--This tutorial is provided in part by Server Intellect Web Hosting Solutions http://www.serverintellect.com-->
//<!--Visit http://www.JavaScriptatoms.com for more JavaScript Tutorials-->
$(document).ready(function () {
    var theBall = $('#ball');
    var theSquare = $('#square');

    theBall.click(function () {
        $(this).animate({
            top: '+=900'
        }, 1500, 'easeOutBounce');
    });

    theSquare.click(function () {
        $(this).animate({
            height:"+=100",
            width:"+=100",        
        },1000,'easeOutElastic')
    });
});