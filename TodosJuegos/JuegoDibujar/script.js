const canvas = document.getElementById("canvas")
const body = document.querySelector('body');
canvas.height = window.innerHeight
canvas.width = window.innerWidth
var theColor = '';
var lineW = 5;
let prevX = null
let prevY = null
let draw = false

body.style.backgroundColor = "#FFFFFF";
var theInput = document.getElementById("favcolor");

theInput.addEventListener("input", function(){
  theColor = theInput.value;
  body.style.backgroundColor = theColor;
}, false);

const ctx = canvas.getContext("2d")
ctx.lineWidth = lineW;

document.getElementById("ageInputId").oninput = function() {
    draw = null
    lineW = document.getElementById("ageInputId").value;
    document.getElementById("ageOutputId").innerHTML = lineW;
    ctx.lineWidth = lineW;
};  

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    a.download = "dibujo.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})


//Eventos táctiles
canvas.addEventListener("touchstart", (e) =>{
    draw = true;
    let rect = canvas.getBoundingClientRect();
    prevX = e.touches[0].clientX - rect.left;
    prevY = e.touches[0].clientY - rect.top;
});

canvas.addEventListener("touchmove", (e) =>{
    e.preventDefault();
    if (draw){
        let rect = canvas.getBoundingClientRect();
        let currentX = e.touches[0].clientX - rect.left;
        let currentY = e.touches[0].clientY - rect.top;
        drawLine(prevX, prevY, currentX, currentY);
        prevX = currentX;
        prevY = currentY;
    }
});


canvas.addEventListener("touchend", () => {
    draw = false;
});

// Eventos de ratón
window.addEventListener("mousedown", (e) => {
    draw = true;
    prevX = e.clientX;
    prevY = e.clientY;
});

window.addEventListener("mouseup", () => {
    draw = false;
});

window.addEventListener("mousemove", (e) => {
    if (draw) {
        drawLine(prevX, prevY, e.clientX, e.clientY);
        prevX = e.clientX;
        prevY = e.clientY;
    }
});

// Función para dibujar una línea
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

document.getElementById("volverButton").addEventListener("click", function() {
    window.location.href = "../todosJuegos.html";
});