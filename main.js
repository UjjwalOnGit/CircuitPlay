const wrapper = document.querySelector(".object"),
header = wrapper.querySelector("header");

function onDrag({movementX , movementY}){
    let getStype = window.getComputedStyle(wrapper);
    let left = parseInt(getStype.left);
    let top = parseInt(getStype.top);
    // console.log(e);

    wrapper.style.left = `${left + movementX}px`;
    wrapper.style.top = `${top + movementY}px`;

    
}


header.addEventListener("mousedown", ()=>{
    document.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", ()=>{
    document.removeEventListener("mousemove", onDrag);
});




window.addEventListener("contextmenu", function(event){
    event.preventDefault();
    var contextElement = document.getElementById("RightClickMenu");
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
});

window.addEventListener("click", function(){
    document.getElementById("RightClickMenu").classList.remove("active");
});