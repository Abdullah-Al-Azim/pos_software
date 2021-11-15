// back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("back-to-top");
  } else {
    toTop.classList.remove("back-to-top");
  }
})


// infinite typin
var typed = new Typed ('.type-animate', {
    strings: [
      "provider in USA",
      "provider in CANADA",
      "provider from sakib"
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


// hamburger menu
var hamburger_________id = document.getElementById("hamburger_________id");
const sidebar = document.querySelector("#sidebar");

hamburger_________id.addEventListener("click", function(e) {
    sidebar.classList.toggle("show_____menu");
})

document.onclick = function(e) {  
  let clickOnIcon = e.target.classList[0] !== "iconify" && e.target.classList[1] !== "iconify--ci" && e.target.classList[2] !== "hamburger_____________icon";
  let clickOnSidebar = e.target.classList[0] !== "side__________content" && e.target.classList[1] !== "show_____menu";

  if (clickOnIcon && clickOnSidebar)
    sidebar.classList.remove("show_____menu");

}


// slider

$('.owl-carousel').owlCarousel({
  loop:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})