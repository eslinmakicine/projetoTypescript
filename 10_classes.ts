//10 - Classes

class Data { //no typescript é possível ter modificador de acesso para cada uma das propriedades. 
    public dia: number; //dessa forma qualquer um consegue acessar, mas é possivel definir propriedade de acesso se colocar "public", "private" e etc. Por default é public
    private mes: number; //com private, so pode ser acessada de dentro da propria classe, a partir de metodos da propria classe
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1965) { //valor default criado para ano, dessa forma nao é obrigatorio definir o ano quando instanciar
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(23,3,1995);
console.log(data.dia);

const data2 = new Data(17,4 ); //para não dar erro se nao for informar todas as propriedades, é possível no "constructor" definir um valor default para a propriedade. No construtor foi definido o valor default de 1965 para ano. Dessa forma, se nao preencher nada ele vai assumir esse valor default

//Uma forma mais facil de fazer é definir o modificador de acesso no construtor. Dessa forma ele nao precisa definir o this na classe. Ficaria dessa forma:


//FORMA MENOS VERBOSA SE ESCREVER:
/* 
class Data {

    constructor(public dia: number, public mes: number, public ano: number = 1965) { // Dessa forma ele nao necessita que crie todas as linhas a mais igual foi no primeiro exemplo
    }
}

*/ 
