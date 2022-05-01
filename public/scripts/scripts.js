console.log("SCRIPTS FOR PERSONAL PROJECT");

// For responsive mobile nav menu
// Step 1: identify the event target (by selecting hamburger icon)
const hamburgerIcon = document.querySelector(".hamburger-icon");

// Step 2: identify the action to be completed (nav menu will open when hamburger icon is clicked) + write event handler that will complete action
const toggleNav = function() {
  const navList = document.querySelector(".nav-ul");
  navList.classList.toggle("open");
}
  
// Step 3: bind/attach the target element to the event and the event handler function through an event listener (attach hamburger icon to event listener)
hamburgerIcon.addEventListener("click", toggleNav);


