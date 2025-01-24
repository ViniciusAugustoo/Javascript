//console.log serve como um printh em python
console.log('JavaScript Funcionando e eu lembro de tudo!');

// Usar ponto e vírgula por boas práticas, mas o ASI faz o código funcionar sem ele
let firstName = 'Andre'; 
let lastName = 'iacono';
console.log(firstName);
console.log(lastName);

// Verificando preços no JavaScript (é importante usar o tipo 'price' como constante)
const price = 30;
console.log(price);

// Variáveis tipo primitivo
let itemName = 'pen'; // string
let itemPrice = 3; // number
let itemAvailable = true; // boolean
let itemColor; // undefined 
itemName = null; // null

// Verificando o tipo da variável
console.log(typeof itemPrice);

// Variáveis de referência (objeto)
let car = {
    itemName: 'car',
    itemPrice: 30000,
    itemAvailable: true,
    itemColor: 'red',
};
// Alterando uma propriedade do objeto
car.itemColor = 'Rose';

console.log(car);


// Trabalhando com arrays
let friends = ['Marcos', 'Diana', 'Agatha'];
// Alterando o nome de alguém na lista
friends[2] = 'Junin';
console.log(friends);


// Criando funções
function saleStatus(status, totalAmount) {
    console.log('Transaction ' + status + '! Total Amount: $' + totalAmount);
}

// Passando argumentos para a função
saleStatus('approved', 30);


//funções com calculos
function percentage10(price) {
    // usar o return para retornar o calculo
    return price - (price * 10/100)
}

console.log(percentage10(40))


//incrementando e decrementando valores de um total (somando, subtraindo, dividindo e multiplicando)
let num1 = 3
let num2 = 2

let total = num1 + num2
//acrescentei o decremente para teste 
console.log(total--)
//printando o valor do decremento + o valor 
console.log(total)

//operador de incremento ++
//operador de decremento --


//operador de atribuição
let num3 = 5
//atribui 20 ao meu num3
num3 += 20

console.log (num3)


//operadores de comparação
let num4 = 10
// comparei se o num4 é maior que o numero 5(tem que retornar true)
console.log(num4 > 5)
console.log(num4 < 5)
console.log(num4 >= 5)
console.log(num4 <= 5)
// !== significa não é igual, deve retornar true
console.log(num4 !== 5)
// == perguntei se é igual ao num4, retorna false. se voce utilizar === será mais restrito e verificara o tipo e se o valor é igual
console.log(num4 == 5)

//verificando velocidade do motorista
//? este simbolo verifica e retorna o escolhido entre o simbolo :
// above = acima / below = abaixo
let driver =  190
let speed = driver > 110 ? 'above' : 'below'

console.log(speed)

