console.log("SCRIPTS FOR PERSONAL PROJECT");

const hamburgerIcon = document.querySelector(".hamburger-icon");

const toggleNav = function() {
  const navList = document.querySelector(".nav-ul");
  navList.classList.toggle("open");
}
  
hamburgerIcon.addEventListener("click", toggleNav);


