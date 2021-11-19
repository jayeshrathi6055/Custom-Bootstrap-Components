console.log("Welcome in the tutorial of Toggle Button");

let button_state = false;

function toggleButton(buttonId){
let id = document.getElementById(buttonId);
if(!button_state){
    id.style.justifyContent = "right";
    id.style.backgroundColor = "blue";
}
else{
    id.style.justifyContent = "left";
    id.style.backgroundColor = "white";
}
button_state = !button_state
}