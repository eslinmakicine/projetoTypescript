//Tipo Assertion
//com isso, ele mostre que tal variável é de tal tipo

const minhaIdade: any = 23; //aqui ele declara que pode ser qualquer coisa por conta de Any
(minhaIdade as number).toString(); //com "as number" ele mostra que a variável minhaIdade nesse momento será um number, e assim poderá utilizar o toString
<number>minhaIdade.toString(); //essa é outra forma de escrever o mesmo código que está na linha de cima


//const input = document.getElementById("numero1"); //se fizer dessa forma ele vai dar erro porque ele define que vai receber um elemento de java, sem saber o que será. Por conta disso, no código abaixo ele define com o "as" que será um elemento input html, assim ele vai permitir
const input = document.getElementById("numero1") as HTMLInputElement; //abaixo está outra forma de escrever esse código
//const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);