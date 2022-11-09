var countBtn = 0;
var countInput = 0;

function mkBtn() {
    countBtn++;
    const btn = document.createElement("button");
    btn.innerHTML = "Botão "+countBtn;
    
    const att0 = document.createAttribute("type");
    att0.value = "button";
    const att1 = document.createAttribute("class");
    att1.value = "btn-person";

    btn.setAttributeNode(att0);
    btn.setAttributeNode(att1);

    document.querySelector(".div-btn").appendChild(btn);
}

function mkInput() {
    countInput++;
    const inputText = document.createElement('input');

    const att0 = document.createAttribute("type");
    att0.value = "number";
    const att1 = document.createAttribute("placeholder");
    att1.value = "Insira um número ("+countInput+")";
    const att2 = document.createAttribute("id");
    att2.value = "input"+countInput;
    const att3 = document.createAttribute("class");
    att3.value = "input-person";

    inputText.setAttributeNode(att0);
    inputText.setAttributeNode(att1);
    inputText.setAttributeNode(att2);
    inputText.setAttributeNode(att3);

    document.querySelector(".div-input").appendChild(inputText);
}