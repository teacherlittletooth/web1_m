/*
alert("Hello world!"); //Popup OK
confirm("Você gosta de chocolate?"); //Popup Ok e Cancelar
prompt("Qul sua idade?"); //Popup Ok, Cancelar e input

var x = 10;
var z = "10";

console.log(typeof(x));
console.log(typeof(z));

console.log(x + x);
console.log(z + z);
*/

function nomeDaJogada(jogada) {
    switch(jogada){
        case 1: return "Pedra";
        break;
        case 2: return "Papel";
        break;
        case 3: return "Tesoura";
        break;
    }
}

var player = prompt(
    "Digite seu nome:"
);

var ptsPlayer = 0;
var ptsCpu = 0;
var game = true;

while(game){
 
    var escolha = prompt(
        "Escolha uma opção:\n1 - Pedra\n2 - Papel\n3 - Tesoura"
        );
        
        if(escolha != 1 && escolha != 2 && escolha != 3) {
            alert("Entrada inválida!");
            console.log("Entrada inválida");
        } else {
            console.log(player + ": " + nomeDaJogada(Number(escolha)));
        }
        
        var escolhaCpu = Math.floor((Math.random() * 3) + 1);
        
        console.log("CPU: " + nomeDaJogada(escolhaCpu));
        
        /*
        1-Pedra; 2-Papel; 3-Tesoura
        1 ganha do 3
        2 ganha do 1
        3 ganha do 2
        */
       
       if(escolha == 1 && escolhaCpu == 3 ||
        escolha == 2 && escolhaCpu == 1 ||
        escolha == 3 && escolhaCpu == 2) {
            alert("VITÓRIA!");
            ptsPlayer++; //ptsPlayer = ptsPlayer + 1
        } else if(escolha == escolhaCpu) {
            alert("EMPATOU.");
        } else {
            alert("DERROTA!");
            ptsCpu++;
        }

        if( !confirm("Deseja continuar?") ){
            game = !game;
        }

    }

    alert(
        "::: GAME OVER :::\n" + player + ": " +
        ptsPlayer + " pts\nCPU: " +
        ptsCpu + " pts"
    );