var rangeTextBox = document.querySelector("#range-text-box");
var textBox = document.querySelector("#text-box");
var font;

rangeTextBox.addEventListener("input", function(){
    font = rangeTextBox.value / 5;
    textBox.style.fontSize = font + "pt";
    console.log(font);
});
