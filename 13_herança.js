"use strict";
//13 - Herança
//na linha 51 está a explicação sobre herança
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Carro2 = /** @class */ (function () {
    function Carro2(marca, modelo, velocidadeMaxima) {
        if (velocidadeMaxima === void 0) { velocidadeMaxima = 200; }
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0; // com private, so pode ser alterada dentro da propria classe, atraves de metodos
    }
    Carro2.prototype.alterarVelocidade = function (delta) {
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
    Carro2.prototype.acelerar = function () {
        this.alterarVelocidade(5);
    };
    Carro2.prototype.frear = function () {
        this.alterarVelocidade(-5);
    };
    return Carro2;
}());
var carro2 = new Carro('chevrolet', 'prima', 250);
//carro.velocidadeMaxima = 400; // dessa forma vai dar erro pq nao é possivel alterar pq ele nao consegue acessar, pois nao é public
carro2.acelerar();
carro2.acelerar();
//carro.alterarVelocidade(); //dessa forma nao é possível acessar, vai dar erro pois o método é private
//___________________________________
//HERANÇA 
var Camaro = /** @class */ (function (_super) {
    __extends(Camaro, _super);
    function Camaro() {
        var _this = _super.call(this, 'Chevrolet', 'Camaro', 500) || this;
        _this.turbo = false;
        return _this;
    }
    Camaro.prototype.ligarTurbo = function () {
        this.turbo = true;
    };
    return Camaro;
}(Carro2));
var camaro = new Camaro();
camaro.acelerar(); //pode herdar os metodos tbm da classe
camaro.frear();
