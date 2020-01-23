////////////////////////////////////////////////////////////////////////////
//eventHandlers.js -- This file includes JavaScript functions used to handle
//user interaction and page navigation.
////////////////////////////////////////////////////////////////////////////

/* bindListenerToClassName -- Given a (CSS) class name, a function, and a listener type (e.g., "click"),
this function iterates through all elements with the class, binding the event listener function to 
the appropriate listener type. 
This is a utility function that allows us to bind the same function to all elements of a class. */
function bindListenerToClassName(className, func, listenerType) {
    var classes = document.getElementsByClassName(className);
    for (var i = 0; i < classes.length; ++i) {
      classes[i].addEventListener(listenerType,func);
    }
  }
  
  //menuBtn click: When the top-left side menu button is clicked, we need to act based on which icon is
  //presently displayed -- hamburger or left arrow. If hamburger, we need to check what mode we're in 
  //and what the current page is and change the menu contents accordingly. If left arrow, we need to hide
  //the menu.
  document.getElementById("menuBtn").addEventListener("click",function(e) {
    if (!menuOpen) {
      document.getElementById("menuBtnIcon").classList.remove("fa-bars");
      document.getElementById("menuBtnIcon").classList.add("fa-times");
      document.getElementById("sideMenu").style.width = "250px";
      menuOpen = true;
      e.stopPropagation();
    }
  });
  
  // sideMenuItem Click: This function does the side menu housekeeping in cases where the item clicked 
  // (of class sideMenuItem) is actually a redirect to another page.  
  
  //document click: If the user clicks anywhere in the document while the side menu is open, we need to
  //close the menu, toggle the menu state, and re-enable all buttons/input fields on the page.
  document.addEventListener("click",function(e) {
    if (menuOpen) {
      document.getElementById("menuBtnIcon").classList.remove("fa-times");
      document.getElementById("menuBtnIcon").classList.add("fa-bars");
      document.getElementById("sideMenu").style.width = "0";
      menuOpen = false;
    }
  });
  //modeBtn click: When the user clicks on a mode button in the bottom fixed bar, we need to switch to
  //the corresponding area of the app.   

  //This block handles highlighting when clicking the aboutMe button
  /*document.getElementById("aboutMeMode").addEventListener("click",function(e) {
    if (mode != "aboutMeMode") {
      document.getElementById(mode).classList.remove("menuItemSelected");
      this.classList.add("menuItemSelected");
      mode = "aboutMeMode";
    }
  });

  //Hightlights qualifications when clicked
  document.getElementById("qualificationsMode").addEventListener("click",function(e) {
    if (mode != "qualificationsMode") {
      document.getElementById(mode).classList.remove("menuItemSelected");
      this.classList.add("menuItemSelected");
      mode = "qualificationsMode";
    }
  });

  //Highlights hobbies when clicked
  document.getElementById("hobbiesMode").addEventListener("click",function(e) {
    if (mode != "hobbiesMode") {
      document.getElementById(mode).classList.remove("menuItemSelected");
      this.classList.add("menuItemSelected");
      mode = "hobbiesMode";
    }
  });*/

  // Replacing three above with better code.
  var bottomBarBtnClick = function() {
    if (mode != this.id) {
      document.getElementById(mode).classList.remove("menuItemSelected");
      this.classList.add("menuItemSelected");
      mode = this.id;
    }
  }