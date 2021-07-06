//tipo Never, complemento do arquivo tipos.ts
//é um tipo de coisas que nunca ocorrem

function loopInfinito(): never { //é Never pq ele fica em loop, então nunca vai sair desse bloco
    while(true) {}
}

function erro(mensagem: string):never { //Essa funcao td vez que for chamada vai abrir uma excessão no código. Ele nunca finaliza, pq quando chamar essa função de erro, vai estourar uma função de excessão no código e assim não vai continuar mais o programa
    throw new Error(mensagem);
}

function falha():never { //como essa função retorna uma função Never, o typescript entende essa função como never tbm. Então posso adc o ":never", mas se nao inserir nao faz mal pois o typescript já insere automaticamente, se passar o mouse em cima é possível perceber
    return erro('algo falhou');
}