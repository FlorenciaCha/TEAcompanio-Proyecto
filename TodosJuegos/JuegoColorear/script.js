/*const container = document.querySelector(".container");
const group = document.querySelector("#group");
const colorInput = document.querySelector("#color-input");
const sizeInput = document-querySelector("size-input");
let currentColor, currentSize, svWidth, svHeight,initialZ, initialY;
let circles= [];
let deviceType = "";
let events = {
    mouse:{
        click: "click",
    },
    touch:{
        click: "touchstart",
    },
};

const iisTouchDevice = () =>{
    try{
        DocumentTimeline.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e){
        deviceType = "mouse";
        return false; 
    }
};

//Elegir un color
colorInput.addEventListener("input", ()=> {
    currentColor = colorInput.ariaValueMax;
});

//Elegir tamaño del pincel
sizeInput.addEventListener("input", ()=> {
    currentSize = sizeInput.value;
} );

iisTouchDevice();

container.addEventListener(events[deviceType].click,(e) => {
    let mouseX = !iisTouchDevice()? e.clientX : e.touches[0].clientX;
    let mouseY = !iisTouchDevice()? e.clientY : e.touches[0].clientY;
    let relativeX = mouseX - container.getBoundingClientRect().left;
    let relativeY = mouseY - container.getBoundingClientRect().top;

    //Dentro del dibujo 
    let finalX = relativeX / initialX;
    let finalY = relativeY / initialY;
    circles.push(`< cx="${finalX}" cy="${finalY}" fill="${currentColor}" r="${currentSize}"/>`);

    group.innerHTML = circles.join("");
});


window.onload=()=>{
    currentColor = "#0075ff";
    colorInput.value = currentColor;
    currentSize = 5;
    sizeInput.value = currentSize;
    [svgHeight,svgWidth] = [500,500];
    initialX = container.clientWidth / svgWidth;
    initialY = container.clientHeight / svgHeight;
    circles = [];;     
}; 
*/

const container = document.querySelector(".container");
const group = document.querySelector("#group");
const colorInput = document.querySelector("#color-input");
const sizeInput = document.querySelector("#size-input");
let currentColor, currentSize, svgWidth, svgHeight, initialX, initialY;
let circles = [];
let deviceType = "";
let events = {
  mouse: {
    click: "click",
  },
  touch: {
    click: "touchstart",
  },
};
const isTouchDevice = () => {
  try {
    //We try to create TouchEvent. It would fail for desktops and throw error
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};
//Choose color
colorInput.addEventListener("input", () => {
  currentColor = colorInput.value;
});
//Choose sie
sizeInput.addEventListener("input", () => {
  currentSize = sizeInput.value;
});
isTouchDevice();
container.addEventListener(events[deviceType].click, (e) => {
  let mouseX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  let mouseY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  let relativeX = mouseX - container.getBoundingClientRect().left;
  let relativeY = mouseY - container.getBoundingClientRect().top;
  //Inside the dino part
  let finalX = relativeX / initialX;
  let finalY = relativeY / initialY;
  circles.push(
    `<circle cx="${finalX}" cy="${finalY}" fill="${currentColor}" r="${currentSize}"/>`
  );
  group.innerHTML = circles.join("");
});
window.onload = () => {
  currentColor = "#0075ff";
  colorInput.value = currentColor;
  currentSize = 5;
  sizeInput.value = currentSize;
  [svgHeight, svgWidth] = [500, 500];
  initialX = container.clientWidth / svgWidth;
  initialY = container.clientHeight / svgHeight;
  circles = [];
};


document.getElementById('nuevoJuego').addEventListener('click', function() {
  // Recargar la página
  location.reload();
});

document.getElementById('volver').addEventListener('click', function() {
  // Volver a la página anterior
  window.location.href = "../todosJuegos.html";
});

