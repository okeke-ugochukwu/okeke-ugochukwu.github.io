window.addEventListener("scroll", makeHeaderSticky);

function makeHeaderSticky() {
    var scrollPosition = 200;
    var headerElement = document.querySelector("header");
    
    var windowY = window.scrollY;
    if ( windowY > scrollPosition) {
        headerElement.style.position = "fixed";
        headerElement.style.top = "0";
        headerElement.style.boxShadow = "0px 1px 10px #1f0345"
    }
    else {
        headerElement.style.position = "relative"
        headerElement.style.boxShadow = "none"
        headerElement.style.top = "unset";
    }
    scrollPosition = windowY;
}

$("#scoll-top-btn").click(function() {
    $("html,body").animate({
        scrollTop: $("body").offset().top
    },
        "slow");
});

$(document).ready(function() {
    document.body.style.opacity = "1";
})


window.addEventListener("scroll", checkPosition);

function checkPosition() {
    var scrollPosition = 700;
    var scrollTopBtn = document.querySelector(".scroll-top-container");
    
    var windowY = window.scrollY;
    if ( windowY < scrollPosition) {
       scrollTopBtn.style.transform = "scale(0)";
    }
    else {
        scrollTopBtn.style.transform = "unset"
    }
    scrollPosition = windowY;
}
