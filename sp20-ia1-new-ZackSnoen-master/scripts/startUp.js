//Start-up functions run when page is loaded.
includeHTML(); //Include html
//TO DO: Write additional code to be executed at startup, e.g.,
document.getElementById("page1").style.display = "none";

var menuOpen = false;

// startup with current page About Me
var mode = "aboutMeMode"; // Current ui mode
document.getElementById(mode).classList.add("menuItemSelected")

// Bind bottomBarBtnClick function to all elements of class bottomBarBtn
var bottomBtns = document.getElementsByClassName("bottomBarBtn");
for (var i = 0; i < bottomBtns.length; ++i) {
    bottomBtns[i].addEventListener("click",bottomBarBtnClick);
}