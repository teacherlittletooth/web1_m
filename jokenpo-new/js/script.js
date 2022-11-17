var title = document.getElementById("title");
var textBox = document.getElementById("text-box");

function startGame() {
    var player = document.querySelector("#player").value;
    console.log(player);
    
    title.innerHTML = "escolha sua jogada!";
    textBox.style.display = "none";
}
