console.log("Welcome to the tutorial of accordion");
let accordion_state = true;

function toggleAccordion(innerAccordionId, innerParaId, iconId){
    let toggle = document.getElementById(innerAccordionId);
    let para = document.getElementById(innerParaId);
    let accordionIcon = document.getElementById(iconId);
    if(!accordion_state){
        accordionIcon.className = "fa fa-angle-down";
        para.style.display = "none"
        toggle.style.backgroundColor = "white"
        toggle.style.boxShadow = "0 0 0 .25rem rgba(13,110,253,.25)"
    }else{
        accordionIcon.className = "fa fa-angle-up";
        para.style.display = "block"
        toggle.style.backgroundColor = "#e7f1ff"
        toggle.style.boxShadow = "inset 0 -1px 0 rgba(0,0,0,.125)"
    }
    accordion_state = !accordion_state;
}