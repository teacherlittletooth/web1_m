//Elementos da range2.html
var rangeRed = document.querySelector("#range-red");
var rangeGreen = document.querySelector("#range-green");
var rangeBlue = document.querySelector("#range-blue");
var colorBox = document.querySelector("#color-box");
var red = 0, green = 0, blue = 0;

rangeRed.addEventListener("input", function(){
    console.log("rgb("+red+","+green+","+blue+")");
    red = rangeRed.value;
    colorBox.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
});

rangeGreen.addEventListener("input", function(){
    console.log("rgb("+red+","+green+","+blue+")");
    green = rangeGreen.value;
    colorBox.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
});

rangeBlue.addEventListener("input", function(){
    console.log("rgb("+red+","+green+","+blue+")");
    blue = rangeBlue.value;
    colorBox.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
});
