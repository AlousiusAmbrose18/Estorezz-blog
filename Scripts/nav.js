const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

// --------------------------------------------------------------------


function show() {
  var reveal = document.querySelectorAll(".reveal");

  for (var i = 1; i < reveal.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveal[i].getBoundingClientRect().top;
    var e = 190;

    if (elementTop < windowHeight - e) {
      reveal[i].classList.add("active");
    }
    else {
      reveal[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", show);