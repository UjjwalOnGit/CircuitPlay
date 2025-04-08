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
    header.addEventListener("mousemove", onDrag);
});

document.addEventListener("mouseup", ()=>{
    header.removeEventListener("mousemove", onDrag);
});