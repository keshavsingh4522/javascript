var canvas = document.querySelector("canvas");
var clear = document.querySelector("#clear");
var red = document.querySelector("#red");
var green = document.querySelector("#green");
var blue = document.querySelector("#blue");
var yellow = document.querySelector("#yellow");
var pink = document.querySelector("#pink");
var black = document.querySelector("#black");

var ctx = canvas.getContext("2d");
var drawing = false;
var oldX = 0;
var oldY = 0;

red.addEventListener("click", () => {
    ctx.strokeStyle = "red";
    ctx.beginPath();
})

green.addEventListener("click", () => {
    ctx.strokeStyle = "green";
    ctx.beginPath();
})

blue.addEventListener("click", () => {
    ctx.strokeStyle = "blue";
    ctx.beginPath();
})

yellow.addEventListener("click", () => {
    ctx.strokeStyle = "yellow";
    ctx.beginPath();
})

pink.addEventListener("click", () => {
    ctx.strokeStyle = "pink";
    ctx.beginPath();
})

black.addEventListener("click", () => {
    ctx.strokeStyle = "black";
    ctx.beginPath();
})

canvas.style.cursor = "crosshair";
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.addEventListener("mousedown", e => {
    drawing = true;
    oldX = e.offsetX;
    oldY = e.offsetY;
});

canvas.addEventListener("mouseup", e => {
    drawing = false;
});

canvas.addEventListener("mousemove", e => {
    if (!drawing){
        return false;
    }
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.moveTo(oldX, oldY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    oldX = e.offsetX;
    oldY = e.offsetY;
});

clear.addEventListener ("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
})

