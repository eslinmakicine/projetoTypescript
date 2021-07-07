//13 - Herança
//na linha 51 está a explicação sobre herança

class Carro2 {

    private velocidadeAtual: number = 0; // com private, so pode ser alterada dentro da propria classe, atraves de metodos

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200, //private pois nao quero que a velocidade seja alterada
    ) { }


    private alterarVelocidade(delta: number) { //os metodos tbm podem ser private, dessa forma nao podem ser acessados fora da classe
        //Aqui seria as validações de aceleracao e frenagem
        //this.velocidadeAtual = XX;

    const novaVelocidade = this.velocidadeAtual + delta;
    
    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
        this.velocidadeAtual = novaVelocidade;
    } else {
        this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0 //se a velocidadeAtual for maior do que zero, a velocidadeAtual recebera a velocidade maxima que é 200 e que nao pode mais ultrapassar. 
                                                                    //se a velocidade atual nao for maior do que zero, então receberá 0 ": 0" 
    }

    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }

}

const carro2 = new Carro('chevrolet', 'prima', 250);
//carro.velocidadeMaxima = 400; // dessa forma vai dar erro pq nao é possivel alterar pq ele nao consegue acessar, pois nao é public
carro2.acelerar();
carro2.acelerar();
//carro.alterarVelocidade(); //dessa forma nao é possível acessar, vai dar erro pois o método é private





//___________________________________
//HERANÇA 

class Camaro extends Carro2 { //dessa forma, vai herdar as propriedades da classe citada
    private turbo = false;

    constructor() {
        super('Chevrolet', 'Camaro', 500); //O SUPER define quais propriedades foram herdados

    }

    ligarTurbo(){ // ele pode herdar metodos da classe, e ter outros metodos diferentes dessa classe herdada
        this.turbo = true;
    }

}

const camaro = new Camaro();
camaro.acelerar(); //pode herdar os metodos tbm da classe
camaro.frear();
