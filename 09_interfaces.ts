//09 - Interfaces
//interfaces existe somente em typescript. É uma forma de criar uma interface para uma classe. É utilizado para tipar alguns dados
//é semelhante a utilizar um type. É claro que interface é possível fazer coisas a mais do que type.
//normalmente recomendam utilizar interfaces do que usar types, isso encontra-se na documentação de typescript

interface Usuario {
    nome: string;
    email: string;
    adress?: string;
}

function getUser(): Usuario { //utilizando interface
    return {
        nome: 'éslin',
        email: 'eslinmartins@gmail.com',
    }
}

function setUser(usuario: Usuario) {  //utilizando interface mais semelhante a type
    // ...
}