//Criando uma instância da classe Date para capturar o horário do sistema
var dateNow = new Date();

//Mapeando elementos do layout (html)
var cronometro = document.querySelector("#cronometro");
var horario = document.querySelector("#horario");

//Variáveis para um temporizador qualquer
var sec = 59;
var min = 14;

//Variáveis para temporizador baseado no horário atual
var hourNow = dateNow.getHours();
var minNow = dateNow.getMinutes();
var secNow = dateNow.getSeconds();

//Teste de saída no console
console.log(dateNow);
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());

//Temporizador com base no horário atual
setInterval(() => {
    horario.innerHTML = hourNow + ":" + minNow + ":" + secNow;
    secNow--;
    if(secNow <= 0){
        minNow--;
        secNow = 59;
    }
    if(minNow <= 0){
        hourNow--;
        minNow = 59;
    }
}, 1000);


//Mapeando régua (range)
var range = document.querySelector("#range");

//Mapear elemento do html (div que escreverá o valor do range)
var countRange = document.querySelector("#count-range");

//Evento "input" linkado ao elemento "range"
range.addEventListener("input", function(){
    countRange.innerHTML = range.value;
    console.log(range.value);
});


//Temporizador com tempo pré-definido
setInterval(() => {
    cronometro.innerHTML =  min + ":" + sec;
    range.value--; //Caso desejemos que o timer interfira na régua
    sec--;
    if(sec <= 0){
        min--;
        sec = 59;
    }
}, 1000); //Milisseconds
