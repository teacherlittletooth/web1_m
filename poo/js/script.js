//Mapeando elementos do layout
const submit = document.getElementById("submit");
const dados = document.getElementById("dados");

//Usamos "var" porque queremos utilizar estes elementos dentro de outra função
var userName = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var cpf = document.getElementById("cpf");
var password = document.getElementById("password");

//Lista vazia
var listPessoas = [];

submit.addEventListener("click", function(){

    //Criando objeto da classe pessoa e inserindo as constantes criadas no construtor da classe
    var obj1 = new Pessoa(
            userName.value,
            email.value,
            phone.value,
            cpf.value,
            password.value
        );

    //Injetando no html a saída (return) do método toString da classe Pessoa
    dados.innerHTML += obj1.toString() + "<hr>"

    //Incluindo o objeto numa lista
    listPessoas.push(obj1);

    //Visualizando lista no console
    console.log(listPessoas);

    clearFields();
});

function clearFields() {
    //Limpando os campos de texto
    userName.value = "";
    email.value = "";
    phone.value = "";
    cpf.value = "";
    password.value = "";
    //Jogando o cursor para o campo userName
    userName.focus();
}