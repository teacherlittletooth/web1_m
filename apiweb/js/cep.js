class Cep {
    constructor(cep, rua, bairro, cidade, estado, ibge){
        this.cep = cep;
        this.rua = rua;
        this.bairro = bairro;
        this.estado = estado;
        this.cidade = cidade;
        this.ibge = ibge;
    }

    toString() {
        return "Cep: " + this.cep +
                "<br>Rua: " + this.rua +
                "<br>Bairro: " + this.bairro +
                "<br>Cidade: " + this.cidade +
                "<br>Estado: " + this.estado +
                "<br>IBGE: " + this.ibge + "<hr>";
    }
}
