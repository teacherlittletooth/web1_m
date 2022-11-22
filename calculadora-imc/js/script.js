var idButton = document.getElementById("id-button");

idButton.addEventListener("click", function(){
    var idName = document.getElementById("id-name").value;
    var idWeight = Number(document.getElementById("id-weight").value);
    var idHeight = Number(document.getElementById("id-height").value);
    //console.log(typeof(idWeight));
    
    var imc = idWeight / Math.pow(idHeight, 2);
    console.log(imc.toFixed(3));

    if(imc < 18.5){
        console.log("abaixo do peso");
    }else if(imc >= 18.5 && imc < 25){
        console.log("peso normal");
    }else if(imc >= 25 && imc < 30){
        console.log("acima do peso");
    }else if(imc >= 30 && imc < 40){
        console.log("obeso");
    }else{
        console.log("obesidade mórbida");
    }

    var weightIdealMin = (18.5 * Math.pow(idHeight, 2));
    var weightIdealMax = (25 * Math.pow(idHeight, 2));
    console.log("peso ideal: \nmin: " + weightIdealMin.toFixed(3) + " kg\nmax: " + weightIdealMax.toFixed(3) + " kg");
});
