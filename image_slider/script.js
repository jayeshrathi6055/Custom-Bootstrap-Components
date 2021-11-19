console.log("Welcome to the tutorial of image slider");

// Method 1 ----------------------------->

// let images = ["image1.jpg","image2.jpg","image3s.jpg"]
// let right_angle = document.querySelector(".right_angle");
// let left_angle = document.querySelector(".left_angle");
// let image = document.getElementById("image");
// let index = 0

// image.attributes.src.value = images[index]

// function slide_right(){
//     index++;
//     if(index==images.length){
//         index = 0
//     }
//     image.attributes.src.value = images[index]
// }

// function slide_left(){
//     index--;
//     if(index<0){
//         index = images.length-1
//     }
//     image.attributes.src.value = images[index]
// }

// setInterval(()=>{slide_right()},8000)

// Method 2 ----------------------------->
let right_angle = document.querySelector(".right_angle");
let left_angle = document.querySelector(".left_angle");
let image = document.getElementsByClassName("image");
let image_content = document.getElementsByClassName("slider_content")
let index = 0
image[index].style.display = "block"
image_content[index].style.display = "block"
images = []

for(let element of image){
    images.push(element.attributes.src.value)
}

function slide_right() {
    let val = index;
    index++;
    if(index==images.length){
        index = 0;
    }
    image[val].style.display = "none";
    image[index].style.display = "block";
    image_content[val].style.display = "none";
    image_content[index].style.display = "block";
}

function slide_left() {
    let val = index;
    index--;
    if(index<0){
        index = image.length - 1;
    }
    image[val].style.display = "none";
    image[index].style.display = "block";
    image_content[val].style.display = "none";
    image_content[index].style.display = "block";
}

setInterval(()=>{slide_right()},8000)