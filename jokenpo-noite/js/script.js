//Variáveis globais
var player; //Nome do jogador
var ptsPlayer, ptsCpu; //Pontuações
var placar = document.querySelector("#placar"); //Placar

function nomeDaJogada(jogada) {
    switch(jogada){
        case 1: return "Pedra";
        break;
        case 2: return "Papel";
        break;
        case 3: return "Tesoura";
        break;
        default: return "Opção inválida";
    }
}

function getNickNameAndStart() {
    player = document.querySelector("#player").value;
    
    if(player == null || player == "") {
        player = "Jogador";
    }
    
    ptsPlayer = 0;
    ptsCpu = 0;

    game();
}

  
    function game() {        
        document.querySelector("#title").innerHTML = player + ", escolha sua jogada";
        document.querySelector("#textbox").style.display = "none";
        document.querySelector("#btn-play").style.display = "none";
        document.querySelector(".btn-options").style.display = "flex";
        placar.innerHTML = player + " " + ptsPlayer + " X " + ptsCpu + " CPU";
    }
    
    
        function move(escolha) {
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
                alert("Ponto para " + player);
                ptsPlayer++; //ptsPlayer = ptsPlayer + 1
            } else if(escolha == escolhaCpu) {
                alert("EMPATOU.");
            } else {
                alert("Ponto para CPU");
                ptsCpu++;
            }
            
            if( !confirm("Deseja continuar?") ){
                endGame();
            }
            
            placar.innerHTML = player + " " + ptsPlayer + " X " + ptsCpu + " CPU";
        } //Fim do turno do jogo
        
    
    function endGame() {
        var winner;
        
        if(ptsPlayer > ptsCpu) {
            winner = player;
        } else if(ptsPlayer == ptsCpu) {
            winner = "Empate";
        } else {
            winner = "CPU";
        }
        
        
    }
