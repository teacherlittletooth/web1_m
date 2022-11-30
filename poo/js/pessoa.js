class Pessoa {
    name;
    email;
    phone;
    cpf;
    password;

    constructor(nameReceived, emailReceived, phoneReceived, cpfReceived, passwordReceived) {
        this.name = nameReceived;
        this.email = emailReceived;
        this.phone = phoneReceived;
        this.cpf = cpfReceived;
        this.password = passwordReceived;
    }

    toString() {
        return "Nome: " + this.name +
            "<br>Email: " + this.email +
            "<br>Phone: " + this.phone +
            "<br>CPF: " + this.cpf +
            "<br>Senha: " + 
        ((this.password != null && this.password != "")
        ? "xxxxxxx" : "Não cadastrada");
    }
}