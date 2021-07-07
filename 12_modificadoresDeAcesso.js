"use strict";
//12 - Utilizando Modificadores de Acesso
var Carro = /** @class */ (function () {
    function Carro(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0; // com private, so pode ser alterada dentro da propria classe, atraves de metodos
    }
    Carro.prototype.alterarVelocidade = function (delta) {
        //Aqui seria as validações de aceleracao e frenagem
        //this.velocidadeAtual = XX;
        var novaVelocidade = this.velocidadeAtual + delta;
        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0; //se a velocidadeAtual for maior do que zero, a velocidadeAtual recebera a velocidade maxima que é 200 e que nao pode mais ultrapassar. 
            //se a velocidade atual nao for maior do que zero, então receberá 0 ": 0" 
        }
    };
    Carro.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro;
}());
var carro = new Carro('chevrolet', 'prima', 250);
//carro.velocidadeMaxima = 400; // dessa forma vai dar erro pq nao é possivel alterar pq ele nao consegue acessar, pois nao é public
carro.acelerar();
carro.acelerar();
carro.acelerar();
//carro.alterarVelocidade(); //dessa forma nao é possível acessar, vai dar erro pois o método é private
