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
  /*var bottomBarBtnClick = function() {
    if (mode != this.id) {
      document.getElementById(mode).classList.remove("menuItemSelected");
      this.classList.add("menuItemSelected");
      mode = this.id;
    }
  }*/
  // Once again replaced the above block with better code to toggle modes

  // This will change the title at the top and the contents of the page
  var bottomBarBtnClick = function() {
    if (mode != this.id) {
      var prevMode = mode;
      mode = this.id;
      // Add this to set sideMode to update current side menu clicked
      // Formatted correctly by slicing it.
      prevSideMode = sideMode;
      sideMode = mode.slice(0, -4);
      //Change mode button:
      document.getElementById(prevMode).classList.remove("menuItemSelected");
      this.classList.add("menuItemSelected");
      //Change page title:
      document.getElementById("topBarTitle").textContent = modeToTitle[mode];
      //Change page content
      document.getElementById(prevMode + "Div").style.display = "none";
      // Handle changing pages from sub menus and not bottom bar menus.
      if (prevSideMode === "aboutMe" || prevSideMode === "qualifications" || prevSideMode === "hobbies")
      {
        document.getElementById(prevSideMode + "ModeDiv").style.display = "none";
      }
      else{
        document.getElementById(prevSideMode + "Div").style.display = "none";
      }
      document.getElementById(mode + "Div").style.display = "block";
      //Change menu items:
      var oldItems = document.getElementsByClassName(prevMode + "Item");
      var newItems = document.getElementsByClassName(mode + "Item");
      //Uses for loop:
      for (var i = 0; i < oldItems.length; ++i) {
        oldItems[i].style.display = "none";
      }
      for (var i = 0; i < newItems.length; ++i) {
        newItems[i].style.display = "block";
      }
    }
  }

    // sideMenuItem Click: This function does the side menu housekeeping in cases where the item clicked 
  // (of class sideMenuItem) is actually a redirect to another page.  
  var sideMenuItemClick = function() {
    if (sideMode != this.id) {
      var prevSideMode = sideMode;
      sideMode = this.id;
      // Highlight new side menu
      document.getElementById(prevSideMode).classList.remove("menuItemSelected");
      this.classList.add("menuItemSelected");
      // Change page content to new sub menu, we will keep the same title at top left though
      // We must check if it is a bottom bar menu because of naming conventions.
      if (prevSideMode === "aboutMe" || prevSideMode === "qualifications" || prevSideMode === "hobbies")
      {
        document.getElementById(prevSideMode + "ModeDiv").style.display = "none";
      }
      else {
        document.getElementById(prevSideMode + "Div").style.display = "none";
      }
      if (sideMode === "aboutMe" || sideMode === "qualifications" || sideMode === "hobbies")
      {
        document.getElementById(sideMode + "ModeDiv").style.display = "block";
      }
      else {
        document.getElementById(sideMode + "Div").style.display = "block";
      }
    }
  }