//Mapeando elemento do layout
var timer = document.querySelector(".timer");

//Criando variáveis do timer com tempo pré-definido
var sec = 59;
var min = 2;

//Variável para inserir setInterval
var clock;

//Instanciando a classe Date no objeto "dateNow"
//e mostrando a saída de alguns métodos dessa classe
var dateNow = new Date();
console.log(dateNow.getDate());
console.log(dateNow.getDay());
console.log(dateNow.getFullYear());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(dateNow.getMonth());

//Criando variáveis para receber dados do relógio do sistema
var secNow = dateNow.getSeconds();
var minNow = dateNow.getMinutes();
//Quanto minutos faltam para fechar a hora atual
var minRest = (60 - minNow);

window.onload = startTimer();

function startTimer() {
    clock = setInterval(() => {
        timer.innerHTML = minRest + ":" + secNow;
        secNow--;
        if(secNow == 0) {
            minRest--;
            secNow = 59;
        }
    }, 1000); //Em milissegundos
}

//Evento "mouseover" ativa a parada do intervalo
timer.addEventListener("mouseover", function(){
    clearInterval(clock);
});

//Evento "mouseleave" ativa novamente "startTimer"
timer.addEventListener("mouseleave", function(){
    startTimer();
});

//setTimeout executa operações com um atraso pré-definido
setTimeout(() => {
    if(confirm("Está gostando do conteúdo?")){
        window.location.href = "https://qi.edu.br";
    } else {
        alert("Então vai te catá!");
    }
}, 5000); //Atraso em milissegundos