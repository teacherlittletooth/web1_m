var idButton = document.getElementById("id-button");

idButton.addEventListener("click",function(){
    var idName = document.getElementById("id-name").value;
    var idHeight = Number(document.getElementById("id-height").value);
    var idWeight = Number(document.getElementById("id-weight").value);
    
    //console.log(typeof(idHeight));

    var imc = idWeight / Math.pow(idHeight, 2);

    console.log("Seu IMC: " +  imc.toFixed(3));

    if(imc < 18.5) {
        console.log("Abaixo do peso");
    } else if(imc >= 18.5 && imc < 25) {
        console.log("Peso normal");
    } else if(imc >= 25 && imc < 30) {
        console.log("Acima do peso");
    } else if(imc >= 30 && imc < 40) {
        console.log("Obesidade");
    } else {
        console.log("Obesidade mórbida");
    }

    var minIdealWeight = Math.pow(idHeight, 2) * 18.5;
    var maxIdealWeight = Math.pow(idHeight, 2) * 24.9;

    console.log("Peso ideal para sua altura:\nMin: " +
                minIdealWeight.toFixed(3) + " kg\nMax: " +
                maxIdealWeight.toFixed(3) + " kg");
});
