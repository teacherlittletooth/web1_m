var idCalc = document.getElementById("id-calc");
var idName;
var idHeight;
var idWeight;
var imc;

idCalc.addEventListener("click", function(){
    idName = document.getElementById("id-name").value;
    idHeight = Number(document.getElementById("id-height").value);
    idWeight = Number(document.getElementById("id-weight").value);

    console.log(idHeight);
    console.log(idWeight);

    imc = idWeight / Math.pow(idHeight, 2);

    console.log(imc.toFixed(3));
    result(imc);
});


function result(imcValue) {
    if(imcValue < 18.5) {
        console.log("Abaixo do peso");
    } else if(imcValue >= 18.5 && imcValue < 25) {
        console.log("Peso normal");
    } else if(imcValue >= 25 && imcValue < 30) {
        console.log("Acima do peso");
    } else if(imcValue >= 30 && imcValue < 35) {
        console.log("Obesidade");
    } else {
        console.log("Obesidade excessiva");
    }
}