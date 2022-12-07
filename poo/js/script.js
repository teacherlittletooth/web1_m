//Mapeando elementos do layout
var submit = document.getElementById("submit");
const dados = document.getElementById("dados");
var inputUpdate = document.getElementById("update");

inputUpdate.style.display = "none";

//Usamos "var" porque queremos utilizar estes elementos dentro de outra função
var userName = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var cpf = document.getElementById("cpf");
var password = document.getElementById("password");

//Lista vazia
var listPessoas = []; //Para os objetos da classe pessoa
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
    //Confirmação de exclusão
    var yes = confirm("Deseja excluir o cadastro " + id + "?");
    if(yes) {
        //Encontrando o id na lista
        var idDelete = listPessoas.find((i) => i.getId() == id);
        //Encontrando o índice da lista (indexOf) que contém o elemento id
        //e enviando este como parâmetro de exclusão
        listPessoas.splice(listPessoas.indexOf(idDelete), 1);

        dados.innerHTML = "";
        for(i in listPessoas) {
            dados.innerHTML += listPessoas[i].toString() + "<hr>";
        }
    }
    console.log(listPessoas);
}

var idUpdate;

function editObject(id) {
    //Fazer desaparecer o botão cadastrar e aparecer o atualizar
    inputUpdate.style.display = "block";
    submit.style.display = "none";

    //Encontrando o objeto na lista por meio do id enviado no parâmetro
    var idEdit = listPessoas.find((i) => i.getId() == id);
    idUpdate = idEdit.getId();
    console.log(idEdit);
    
    //Injetando os atributos do objeto nos campos do html
    userName.value = idEdit.getName();
    email.value = idEdit.getEmail();
    phone.value = idEdit.getPhone();
    cpf.value = idEdit.getCpf();
    password.value = idEdit.getPassword();
}

function update() {
    //console.log(idUpdate);
    var objUpdate = new Pessoa(
        idUpdate,
        userName.value,
        email.value,
        phone.value,
        cpf.value,
        password.value
    )

    //Apagando o objeto que foi editado
    listPessoas.splice(idUpdate, 1);
    
    //Inserindo um novo objeto com o mesmo id do objeto editado (gambiarra)
    listPessoas.unshift(objUpdate);

    console.log(listPessoas);
    
    dados.innerHTML = "";
    
    for(i in listPessoas) {
        dados.innerHTML += listPessoas[i].toString() + "<hr>";
    }

    //Fazer desaparecer o botão atualizar e aparecer o cadastrar
    inputUpdate.style.display = "none";
    submit.style.display = "block";

    clearFields();
}
