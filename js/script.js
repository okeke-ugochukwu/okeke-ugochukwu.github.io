//select light/dark mode when document is ready.
$(document).ready(function() {

        //get color mode data saved locally
        var modePreference = localStorage.getItem("colorMode");

        //check color mode value
        if (modePreference == "dark") {
            switchDarkMode();
        }
        //call styling function
        else if (modePreference == "light") {
            switchLightMode();
        }

})




$("#toon").on("load", function() {
    $(".intro").fadeOut("fast");
    $(".page").css("opacity", "1");
    $("body").css("overflowY", "scroll");
})


//Scroll to projects scetion
    $("#projects").click(function() {
        $("html,body").animate({
            scrollTop: $("#proj-section").offset().top
        },
            "slow");
    });


//Scroll to top
$("#scoll-top-btn").click(function() {
    $("html,body").animate({
        scrollTop: $("header").offset().top
    },
        "slow");
});


//scroll to top button
window.addEventListener("scroll", checkPosition);

function checkPosition() {
    var scrollPosition = 700;
    var scrollTopBtn = document.querySelector(".scroll-top-container");

    var windowY = window.scrollY;
    if ( windowY < scrollPosition) {
       scrollTopBtn.style.transform = "scale(0)";
    }
    else {
        scrollTopBtn.style.display = "block";
        scrollTopBtn.style.transform = "unset"
    }
    scrollPosition = windowY;
}


//Header projects button hover effect
function changeIcon() {
    document.getElementById("project-icon").src = "img/project_ff6a00.png";
}
function initialIcon() {
    document.getElementById("project-icon").src = "img/project_6a38d8.png";
}


//Submit button value change
$("#submit-btn").click(function () {
    document.getElementById("submit-btn").value = "Sending..";
})


//Form input scale tranform
var inputNodeList = document.getElementsByClassName("input-field");
    var i;
    for (i = 0; i < inputNodeList.length; i++) {
        inputNodeList[i].onfocus = function() {
            this.parentElement.style.transform = "scale(1.05)";
        }

        inputNodeList[i].onblur = function() {
           this.parentElement.style.transform = "none";
        }
    }



//repce style href and change color-mode-icon
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
