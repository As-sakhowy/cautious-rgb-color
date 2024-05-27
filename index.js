const btn = document.querySelector(".btn")
const color = document.getElementById("color")

btn.addEventListener("click", function(){
    const newColor = `rgb(${changeColor()},${changeColor()},${changeColor()})`;
    console.log(newColor)
    color.textContent = newColor;
    document.body.style.backgroundColor = newColor;
})

function changeColor(){
    return Math.floor(Math.random() * 256)
}