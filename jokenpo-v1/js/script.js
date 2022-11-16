//Variáveis globais
var player; //Nome do jogador
var ptsPlayer, ptsCpu; //Pontuações
var placar = document.querySelector("#placar"); //Placar
var btnOptions = document.querySelector(".btn-options"); //Botões do jogo
var title = document.querySelector("#title"); //Título
var isPlaying = true;
var iconMusic = document.querySelector("#icon-music"); //Ícone do som
var music = document.querySelector("#music");

function playPause() {
    if(isPlaying) {
        iconMusic.src = "img/mute.png";
        music.pause();
        isPlaying = !isPlaying;
    } else {
        iconMusic.src = "img/som.png";
        music.play();
        isPlaying = !isPlaying;
    }
}

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
        title.innerHTML = player + ", escolha sua jogada";
        document.querySelector("#textbox").style.display = "none";
        document.querySelector("#btn-play").style.display = "none";
        btnOptions.style.display = "flex";
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
            music.src = "media/win.mp3";
            music.removeAttribute("loop");
        } else if(ptsPlayer == ptsCpu) {
            winner = "Empate";
        } else {
            winner = "CPU";
            music.src = "media/lose.mp4";
            music.removeAttribute("loop");
        }
        
        btnOptions.style.display = "none"; //Fazendo sumir os botões
        title.innerHTML = "O vencedor foi<br><br><strong>" + winner + "</strong>";

        placar.className = "text-white placar-final";
    }