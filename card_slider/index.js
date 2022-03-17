console.log("card slider working");

let slider = document.querySelector(".slider");
let right_slider = document.querySelector(".right_slider")
let left_slider = document.querySelector(".left_slider")

right_slider.onclick = function () {
    slider.scrollLeft += 300;
  };
  left_slider.onclick = function () {
    slider.scrollLeft -= 300;
  };