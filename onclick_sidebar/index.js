function launch_sidebar(id){
    let side_id = document.getElementById(id);
    if(side_id.style.visibility=='visible'){
        side_id.style.visibility = "hidden";
    }else{
        side_id.style.visibility = "visible";
    }
}

function closeSidebar(id) {
    let sidebar_id = document.getElementById(id);
    sidebar_id.style.visibility = "hidden"
}