const canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

let isDrawing = false;
let brushWidth = 5;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

});

const startDrawing = () => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
}

const drawing = (e) => {

    if (!isDrawing) return;

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);

document.getElementById("save").addEventListener("click",function () {
    
    var dataURL = canvas.toDataURL("image/png");
    var newTab = window.open('about:blank');
    newTab.document.write("<img src='" + dataURL + "' alt='from canvas'/>");
});