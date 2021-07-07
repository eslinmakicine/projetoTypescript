"use strict";
//10 - Classes
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1965; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(23, 3, 1995);
console.log(data.dia);
var data2 = new Data(17, 4); //para não dar erro se nao for informar todas as propriedades, é possível no "constructor" definir um valor default para a propriedade. No construtor foi definido o valor default de 1965 para ano. Dessa forma, se nao preencher nada ele vai assumir esse valor default
//Uma forma mais facil de fazer é definir o modificador de acesso no construtor. Dessa forma ele nao precisa definir o this na classe. Ficaria dessa forma:
//FORMA MENOS VERBOSA SE ESCREVER:
/*
class Data {

    constructor(public dia: number, public mes: number, public ano: number = 1965) { // Dessa forma ele nao necessita que crie todas as linhas a mais igual foi no primeiro exemplo
    }
}

*/
