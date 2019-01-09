/* Carousel */
var prev = document.getElementById("img1");
var selected = document.getElementById("img2");
var next = document.getElementById("img3");

var citation = document.getElementsByClassName("citation");

var index = 2;

citation[index - 1].classList.remove("hide");

function carouselPrev() {
  switch (index) {
    case 1:
      prev.classList.remove("selected");
      prev.classList.add("prev");
      selected.classList.remove("next");
      selected.classList.add("selected");
      next.classList.remove("next_last");
      next.classList.add("next");

      citation[index - 1].classList.add("hide");
      index = 2;
      citation[index - 1].classList.remove("hide");
      break;
    case 2:
      prev.classList.remove("prev");
      prev.classList.add("prev_last");
      selected.classList.remove("selected");
      selected.classList.add("prev");
      next.classList.remove("next");
      next.classList.add("selected");

      citation[index - 1].classList.add("hide");
      index = 3;
      citation[index - 1].classList.remove("hide");
      break;
  }
}

function carouselNext() {
  switch (index) {
    case 2:
      prev.classList.remove("prev");
      prev.classList.add("selected");
      selected.classList.remove("selected");
      selected.classList.add("next");
      next.classList.remove("next");
      next.classList.add("next_last");

      citation[index - 1].classList.add("hide");
      index = 1;
      citation[index - 1].classList.remove("hide");
      break;
    case 3:
      prev.classList.remove("prev_last");
      prev.classList.add("prev");
      selected.classList.remove("prev");
      selected.classList.add("selected");
      next.classList.remove("selected");
      next.classList.add("next");

      citation[index - 1].classList.add("hide");
      index = 2;
      citation[index - 1].classList.remove("hide");
      break;
  }
}
