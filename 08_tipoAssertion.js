"use strict";
//08 - Type Assertion
//com isso, ele mostre que tal variável é de tal tipo
var minhaIdade = 23; //aqui ele declara que pode ser qualquer coisa por conta de Any
minhaIdade.toString(); //com "as number" ele mostra que a variável minhaIdade nesse momento será um number, e assim poderá utilizar o toString
minhaIdade.toString(); //essa é outra forma de escrever o mesmo código que está na linha de cima
//const input = document.getElementById("numero1"); //se fizer dessa forma ele vai dar erro porque ele define que vai receber um elemento de java, sem saber o que será. Por conta disso, no código abaixo ele define com o "as" que será um elemento input html, assim ele vai permitir
var input = document.getElementById("numero1"); //abaixo está outra forma de escrever esse código
//const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
