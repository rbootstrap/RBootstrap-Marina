		/*
* RBootstrap - Marina (https://rbootstrap.com/marina-construction-and-builder-template/)
* Copyright 2023 RBootstrap
* Licensed under MIT (https://github.com/rbootstrap/RBootstrap-Marina/blob/main/LICENSE)
*/

/* scroll reveal elements */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      var anim_name=reveals[i].dataset.reveal;
      reveals[i].classList.add(anim_name);
    } else {
      //reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
