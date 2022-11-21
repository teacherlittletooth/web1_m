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
    }
});

