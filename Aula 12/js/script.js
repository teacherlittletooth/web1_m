// alert("Hello world!"); //Cria uma caixa de mensagem
// confirm("Está gostando da aula?"); //Caixa de pergunta com opção cancelar (bool)
// prompt("Qual seu nome?"); //Caixa de pergunta com opção de digitar resposta

function pegaEmail() {
    //var email = document.getElementById("floatingInput").value;
    var email = document.querySelector("#id-email").value;
    console.log(email.length);
    return email;
}

function pegaPassword() {
    var password = document.getElementById("id-pass").value;
    console.log("Senha digitada:" + password);
    return password;
}

function validaLogin() {
    var email = pegaEmail();
    var pass = pegaPassword();

    if(email.length < 1) {
        alert("preencha o campo EMAIL");
        document.querySelector("#id-email").focus();
    }

    if(pass.length < 1) {
        alert("preencha o campo SENHA");
        document.querySelector("#id-pass").focus();
    }

    if(email.length > 0 && pass.length > 0) {
        if(email == "deko.sete@gmail.com" && pass == "1234"){
            alert("LOGIN EFETUADO COM SUCESSO!");
            window.location.replace("inicio.html");
        } else {
            alert("EMAIL OU SENHA INVÁLIDO!");
            document.getElementById("id-email").value="";
            document.getElementById("id-pass").value="";
            document.getElementById("id-email").focus();
        }
    }
}

