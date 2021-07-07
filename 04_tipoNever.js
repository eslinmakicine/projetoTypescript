"use strict";
//04 - Tipo Never
//tipo Never, complemento do arquivo tipos.ts
//é um tipo de coisas que nunca ocorrem
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('algo falhou');
}
