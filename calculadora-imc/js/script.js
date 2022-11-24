var idButton = document.getElementById("id-button");
var title = document.getElementById("title");
var inputContent = document.getElementById("input-content");
var resultContent = document.getElementById("result-content");

idButton.addEventListener("click",function(){
    //Alterando o texto do título
    title.innerHTML = "Resultado";

    //Capturando os valores digitados nos campos de texto (input)
    var idName = document.getElementById("id-name").value;
    var idHeight = Number(document.getElementById("id-height").value);
    var idWeight = Number(document.getElementById("id-weight").value);
    
    //console.log(typeof(idHeight));

    var imc = idWeight / Math.pow(idHeight, 2);

    console.log("Seu IMC: " +  imc.toFixed(3));
    //Injetando dados no elemento html
    resultContent.innerHTML = idName + ", seu IMC é " +  imc.toFixed(3) + " kg/m²";

    //Fazendo desaparecer os inputs e mostrando o resultado
    inputContent.style.display = "none";
    resultContent.style.display = "block";

    if(imc < 18.5) {
        console.log("Abaixo do peso");
        resultContent.innerHTML += "<br>Situação: Abaixo do peso";
    } else if(imc >= 18.5 && imc < 25) {
        console.log("Peso normal");
        resultContent.innerHTML += "<br>Situação: Peso normal";
    } else if(imc >= 25 && imc < 30) {
        console.log("Acima do peso");
        resultContent.innerHTML += "<br>Situação: Acima do peso";
    } else if(imc >= 30 && imc < 40) {
        console.log("Obesidade");
        resultContent.innerHTML += "<br>Situação: Obesidade";
    } else {
        console.log("Obesidade mórbida");
        resultContent.innerHTML += "<br>Situação: Obesidade mórbida";
    }

    var minIdealWeight = Math.pow(idHeight, 2) * 18.5;
    var maxIdealWeight = Math.pow(idHeight, 2) * 24.9;

    console.log("Peso ideal para sua altura:\nMin: " +
                minIdealWeight.toFixed(3) + " kg\nMax: " +
                maxIdealWeight.toFixed(3) + " kg");
    
    resultContent.innerHTML += "<hr>Peso ideal para sua altura:" +
                        "<br>Min: " + minIdealWeight.toFixed(3) + " kg" +
                        "<br>Máx: " + maxIdealWeight.toFixed(3) + " kg";
});
