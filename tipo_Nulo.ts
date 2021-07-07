//Tipo NULL
//para valores nulos ou opcionais
//é usado em casos em que o campo pode ser nulo ou não, é opcional ou não

type Contato = {
    nome: string;
    telefone: string;
    telefone2?: string; //com o "?" ele mostra que esse campo não é obrigatório
}

const contato: Contato = {
    nome: 'éslin',
    telefone: '997232565',
 // telefone2: null, //ao colocar isso aparece "Type 'null' is not assignable to type 'string'.ts(2322)". Nesse caso, o "?" na variavel telefone2 demonstra que esse campo pode ser nulo, ou seja, não é obrigatório. Dessa forma, não é obrigatorio preencher. Outra forma seria fazer "telefone2: string | null", no entanto, a forma feita no exemplo é melhor para utilizar

}