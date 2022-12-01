var strophe = document.querySelector("#strophe");
var zoom = document.querySelector("#zoom");

zoom.addEventListener("input", function(){
    console.log(zoom.value);
    strophe.style.fontSize = zoom.value + "pt";
});
