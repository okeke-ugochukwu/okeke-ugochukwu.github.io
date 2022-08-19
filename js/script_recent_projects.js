

window.addEventListener("scroll", makeHeaderSticky);

function makeHeaderSticky() {
    var scrollPosition = 200;
    var headerElement = document.querySelector("header");

    var windowY = window.scrollY;
    if ( windowY > scrollPosition) {
        headerElement.style.position = "fixed";
        headerElement.style.top = "0";
        headerElement.style.boxShadow = "0px -10px 50px #1f034563"
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


var modePreference = localStorage.getItem("colorMode");
console.log(modePreference);

if (modePreference == "dark") {
    switchDarkMode();
}
else if (modePreference == "light") {
    switchLightMode();
}

//replace style href and change color-mode-icon
function switchDarkMode() {
    document.getElementById("dark-mode-css").setAttribute("href", "css/style_darkmode.css");
    document.getElementById("dark-mode-icon").style.display = "none";
    document.getElementById("light-mode-icon").style.display = "block";
    localStorage.setItem("colorMode", "dark");
}

function switchLightMode() {
    document.getElementById("dark-mode-css").removeAttribute("href");
    document.getElementById("dark-mode-icon").style.display = "block";
    document.getElementById("light-mode-icon").style.display = "none";
    localStorage.setItem("colorMode", "light");
}



// animations
// aos animation library + some DOM manipulation
//loop thought a list of elements and add aos animtion library attributes to them
var thumbnailsNodeList = document.getElementsByClassName("thumbnail"); var t;
    for (t = 0; t <  thumbnailsNodeList.length; t++) {
        thumbnailsNodeList[t].setAttribute("data-aos", "zoom-in-up");
        thumbnailsNodeList[t].setAttribute("data-aos-duration", "800");
    }

var headingsNodeList = document.getElementsByClassName("thumbnail-descr-title"); var hd ;
var delayStartValue = 100;
    for (hd = 0; hd < headingsNodeList.length; hd++) {
        headingsNodeList[hd].setAttribute("data-aos", "fade-up");
        headingsNodeList[hd].setAttribute("data-aos-duration", "800");
        headingsNodeList[hd].setAttribute("data-aos-delay", delayStartValue);
        delayStartValue += 50;
    }

    delayStartValue = 150;                     //reinitialize delay to undo value from end of just just run for loop
var pgraghNodeList = document.getElementsByClassName("thumbnail-descr-pgraph"); var pgh;
    for (pgh = 0; pgh < pgraghNodeList.length; pgh++) {
        pgraghNodeList[pgh].setAttribute("data-aos", "fade-up");
        pgraghNodeList[pgh].setAttribute("data-aos-duration", "800");
        pgraghNodeList[pgh].setAttribute("data-aos-delay", delayStartValue);
        delayStartValue += 50;
    }

    delayStartValue = 200;
var btn1NodeList = document.getElementsByClassName("project-btn1"); var btn1;
    for (btn1 = 0; btn1 < btn1NodeList.length; btn1++) {
        btn1NodeList[btn1].setAttribute("data-aos", "fade-up");
        btn1NodeList[btn1].setAttribute("data-aos-duration", "800");
        btn1NodeList[btn1].setAttribute("data-aos-delay", delayStartValue);
        delayStartValue += 50;
    }

    delayStartValue = 250;
var btn2NodeList = document.getElementsByClassName("project-btn2"); var btn1;
    for (btn1 = 0; btn1 < btn2NodeList.length; btn1++) {
        btn2NodeList[btn1].setAttribute("data-aos", "fade-up");
        btn2NodeList[btn1].setAttribute("data-aos-duration", "800");
        btn2NodeList[btn1].setAttribute("data-aos-delay", delayStartValue);
        delayStartValue += 50;
    }