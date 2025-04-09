// ========== RIGHT-CLICK MENU POSITION ==========-----------------------------

let contextPos = { x: 0, y: 0 };

window.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    contextPos = { x: event.pageX, y: event.pageY };

    const menu = document.getElementById("RightClickMenu");
    menu.style.top = contextPos.y + "px";
    menu.style.left = contextPos.x + "px";
    menu.classList.add("active");
});

window.addEventListener("click", function () {
    document.getElementById("RightClickMenu").classList.remove("active");
});


// ------------------------------------------------------------------------------

// ========== HANDLE MENU ITEM CLICK ==========----------------------

const menuItems = document.querySelectorAll("#RightClickMenu .item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const type = item.textContent.trim();
        createGate(type, contextPos.x, contextPos.y);
    });
});

//--------------------------------------------------------------------


// ========== GATE CREATION ==========-------------------------------

function createGate(type, x, y) {
    const template = document.querySelector("#gateTemplate .object");
    const newGate = template.cloneNode(true);

    newGate.style.left = x + "px";
    newGate.style.top = y + "px";
    newGate.style.position = "absolute";
    newGate.style.display = "block";

    newGate.querySelector("header").textContent = type;

    document.body.appendChild(newGate);

    makeDraggable(newGate);
}

//------------------------------------------------------------------


// ========== MAKE GATE DRAGGABLE ==========------------

function makeDraggable(wrapper) {
    const header = wrapper.querySelector("header");

    function onDrag({ movementX, movementY }) {
        let styles = window.getComputedStyle(wrapper);
        let left = parseInt(styles.left) || 0;
        let top = parseInt(styles.top) || 0;

        wrapper.style.left = `${left + movementX}px`;
        wrapper.style.top = `${top + movementY}px`;
    }

    header.addEventListener("mousedown", () => {
        document.addEventListener("mousemove", onDrag);
    });

    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", onDrag);
    });
}
//--------------------------------------------------------

// ========== MAKE INITIAL GATE DRAGGABLE ==========

makeDraggable(document.querySelector(".object"));
