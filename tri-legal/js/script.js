var btnAdd = document.getElementById("btn-add");
var idNumber = document.getElementById("id-number");
var btnEnd = document.getElementById("btn-end");
var selectNumber = document.getElementById("select-number");
var countNumber = document.getElementById("count-number");
var sumNumber = document.getElementById("sum-number");
var maxNumber = document.getElementById("max-number");
var minNumber = document.getElementById("min-number");
var firstNumber = document.getElementById("first-number");
var lastNumber = document.getElementById("last-number");
var sortAscNumber = document.getElementById("sort-asc-number");
var sortDescNumber = document.getElementById("sort-desc-number");

var listNumber = [];

//Função para adicionar novos números
btnAdd.addEventListener("click", function(){
    if(idNumber.value == "" || idNumber.value == null){
        alert("Insira um número!");
        idNumber.focus();
    } else {
        listNumber.push(idNumber.value);
        console.log(listNumber);
        selectNumber.innerHTML += "<option value=''>" +
                                        idNumber.value +
                                    "</option>"
    }
});


btnEnd.addEventListener("click", function(){
    //Pegando o tamanho da lista
    countNumber.innerHTML += listNumber.length;

    //Varrendo a lista e somando todos os números
    var sumFor = 0;
    // for clássico
    // for(var i=0; i<listNumber.length; i++){
    //    sumFor += listNumber[i];
    // }

    // for simplificado (foreach)
    for(i in listNumber) {
        sumFor += Number(listNumber[i]);
    }

    sumNumber.innerHTML += sumFor;

    //Pegando o maior número da lista
    maxNumber.innerHTML += Math.max(...listNumber);
    //as reticências extrairão os números da lista para o formato: 0, 1, 2...

    //Pegando o menor número da lista
    minNumber.innerHTML += Math.min(...listNumber);

    //Pegando o primeiro número da lista
    firstNumber.innerHTML += listNumber[0];

    //Pegando o último número da lista
    lastNumber.innerHTML += listNumber[listNumber.length - 1];
    
    //Ordenando de forma crescente (ascendente)
    var sortAsc = listNumber.sort((lesser, greater) => lesser - greater);

    sortAscNumber.innerHTML += sortAsc;

});
