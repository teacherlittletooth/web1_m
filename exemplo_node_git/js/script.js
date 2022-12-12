////////JavaScript puro
// document.body.innerHTML += "<h1>Oi!</h1>";
// document.querySelector("#id-div").style.backgroundColor = "pink";
// document.querySelector(".class-div").style.color = "blue";
// document.querySelector("main").style.fontSize = "20pt";
// document.querySelector("article").style.fontFamily = "courier";
// document.querySelector("section").addEventListener("click", function(){
//     document.body.append("Clicou...");
// });


////////JQuery
$("body").append("<h1>Hello</h1>");
$("#id-div").css("color", "blue");
$(".class-div").css("backgroundColor", "aqua");
$("main").css("textShadow", "0px 0px 3px green");
$("article").css("border", "double 3px green");

$("section").on("click",function(){
     $("body").append("Clicou...<br>");
});
    



