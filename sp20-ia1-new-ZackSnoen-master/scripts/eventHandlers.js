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
  
  // sideMenuItem Click: This function does the side menu housekeeping in cases where the item clicked 
  // (of class sideMenuItem) is actually a redirect to another page.  
  
  //document click: If the user clicks anywhere in the document while the side menu is open, we need to
  //close the menu, toggle the menu state, and re-enable all buttons/input fields on the page.
  
  //modeBtn click: When the user clicks on a mode button in the bottom fixed bar, we need to switch to
  //the corresponding area of the app.   