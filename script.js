
const navbar = document.querySelector("ul.nav");
const menuWrap = document.querySelector(".menuIconWrap");
const menuIcon = document.querySelector(".menuIconWrap"); 

menuIcon.addEventListener("click",responsiveNavBar);

function responsiveNavBar(){
	menuWrap.classList.toggle("menuClose");
	navbar.classList.toggle("navStyle");	
}