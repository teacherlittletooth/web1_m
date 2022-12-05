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
var listPessoas = []; //Para os objetos da classe pessoa
var listDados = []; //Para apresentação dos dados na tela
var idPessoa = 0;

submit.addEventListener("click", function(){

    if(userName.value == "" || cpf.value == "" || password.value == "") {
        alert("Campos obrigatórios não preenchidos");
    } else {

        //Criando objeto da classe pessoa e inserindo as constantes criadas no construtor da classe
        var obj1 = new Pessoa(
            idPessoa,
            userName.value,
            email.value,
            phone.value,
            cpf.value,
            password.value
            );

            idPessoa++; //Incrementar o número do id
            
            //Incluindo o objeto numa lista
            listPessoas.push(obj1);

            //limpando a área que a lista será dinamicamente atualizada
            dados.innerHTML = "";

            //Injetando no html a saída (return) do método toString de cada objeto da classe Pessoa
            //que está inserido no listPessoas
            for(i in listPessoas){
                dados.innerHTML += listPessoas[i].toString() + "<hr>"
            }
            
            //Visualizando lista no console
            console.log(listPessoas);
            
            clearFields();
        }
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

function deleteObject(id) {
    var yes = confirm("Deseja excluir o cadastro " + id + "?");
    if(yes) {
        listPessoas.splice(id, 1);
        dados.innerHTML = "";
        for(i in listPessoas) {
            dados.innerHTML += listPessoas[i].toString() + "<hr>";
        }
    }
    console.log(listPessoas);
}


function editObject(id) {
    
}
