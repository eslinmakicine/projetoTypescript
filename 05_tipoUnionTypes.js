"use strict";
//05 - Múltiplos tipos com Union Types
//para definir que uma variavel ou parametro de função tem um tipo ou outro tipo. No caso, tem mais de um tipo
//se por ventura ter uma situação em que a nota tbm pode ser uma string, pode ser descrito na função que o parametro pode ser number ou string como coloquei em "number | string"
//Isso pode ser feito direto em variaveis ou retorno tbm, como estão os dois casos no exemplo abaixo:
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota(10);
exibirNota('9');
