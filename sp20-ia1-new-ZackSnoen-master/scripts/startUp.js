//Start-up functions run when page is loaded.
includeHTML(); //Include html
//TO DO: Write additional code to be executed at startup, e.g.,
var menuOpen = false;

// startup with current page About Me
var mode = "aboutMeMode"; // Current ui mode
document.getElementById(mode).classList.add("menuItemSelected")

// When changing modes, we'll use this to change the titles of pages
var modeToTitle = {"aboutMeMode": "About Me",
                    "qualificationsMode": "Qualifications",
                "hobbiesMode": "Hobbies"};

// Bind bottomBarBtnClick function to all elements of class bottomBarBtn
var bottomBtns = document.getElementsByClassName("bottomBarBtn");
for (var i = 0; i < bottomBtns.length; ++i) {
    bottomBtns[i].addEventListener("click",bottomBarBtnClick);
}

// Hide all pages at the startup
// We want to show this page to start document.getElementById("aboutMeDiv").style.display = "none";
document.getElementById("qualificationsModeDiv").style.display = "none";
document.getElementById("hobbiesModeDiv").style.display = "none";
document.getElementById("hometownDiv").style.display = "none";
document.getElementById("majorDiv").style.display = "none";
document.getElementById("workDiv").style.display = "none";
document.getElementById("schoolDiv").style.display = "none";
document.getElementById("gamesDiv").style.display = "none";
document.getElementById("snowboardingDiv").style.display = "none";

    //Show only the feed mode menu items
    
  var menuItems = document.getElementsByClassName("menuItem");
  for (var i = 0; i < menuItems.length; ++i) {
    menuItems[i].style.display = "none";
  }
  
  var feedItems = document.getElementsByClassName("aboutMeModeItem");
  for (var i = 0; i < feedItems.length; ++i) {
    feedItems[i].style.display = "block";
  }