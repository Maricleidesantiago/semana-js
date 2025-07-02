//tabuada com for

/*
primeiramente eu fiz o codigo abaixo, para mostrar no console, como o professor pediu
na atividade.

let mostrarTabuada = (num) => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
};

mostrarTabuada(1);

Mas, como eu sou curiosa, resolvi fazer com que o usuario digite um numero e a tabuada aparecesse na tela
(não só no console) para isso usei o imput no html, e fiz a validação no js para que o usuario digite 
apenas numeros.
então voce digita um numero
clica no botão
ele mostra a tabuada desse numero no div que tem id="resultado"
*/

function mostrarTabuada() {
    const valorDigitado = document.getElementById("num").value.trim();
    const resultado = document.getElementById("resultado");

    // Limpa o conteúdo anterior
    resultado.innerHTML = "";

    // Validação: impede valores vazios ou não numéricos
    if (valorDigitado === '' || isNaN(valorDigitado)) {
        resultado.innerHTML = "Por favor, digite um número válido.";
        return;
    }

    const num = Number(valorDigitado);

    // Gera a tabuada de 1 a 10
    for (let i = 1; i <= 10; i++) {
        const linha = document.createElement("div"); // cria uma nova div
        linha.classList.add("linha-tabuada"); // adiciona uma classe para estilizar
        linha.textContent = `${num} x ${i} = ${num * i}`; // texto da linha
        resultado.appendChild(linha); // adiciona essa linha no resultado
    }
}











/*arrow function(funçoes de seta)outra forma de criar funçoes só que menores, 
mais simplificadas*/
const mostrarParesDeAte = (n) => {
    for (let i = 2; i <= n; i += 2) {
        console.log(i);
    }
    
}
mostrarParesDeAte(10);

/*for (let i = 2; i <= n; i += 2) laço de repetição for, que começa com o numero 2
primeiro numero par, (i<=n)continua o laço enquantoi for menor ou igual ao n.
(i+=2)incremento de 2 em 2 ou seja, so numeros pares
console.log(i) mostra no console o valor de cada i, ou seja, os numeros pares
mostrarParesDeAte(10) chama a funçao mostrarParesDeAte com o parametro 10*/

const mostrarImparesDeAte = (n) => {
    for (let i = 1; i <= n; i += 2) {
        console.log(i);
    }
    
}
mostrarImparesDeAte(10);

/*for (let i = 1; i <= n; i += 2) laço de repetição for, que começa com o numero 1
primeiro numero impar, (i<=n)continua o laço enquanto i for menor ou igual ao n.
(i+=2)incremento de 2 em 2 ou seja, so numeros impares
console.log(i) mostra no console o valor de cada i, ou seja, os numeros impares
mostrarImparesDeAte(10) chama a funçao mostrarImparesDeAte com o parametro 10*/

/*Desafio mostrar se cada numero até n é par ou impar e que guarde os pares em um array e retorne*/

const MostraParesEImpares = (n) => {
    let pares=[];
    let impares=[];
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }
    console.log(`Pares:${pares}`);
    console.log(`Impares:${impares}`);
}

MostraParesEImpares(10);

/*let pares=[2,4,6,8,10]; cria um array chamado pares, onde serão guardados os numeros pares
let impares=[1,3,5,7,9]; cria um array chamado impares, onde são guardados os numeros impares
for (let i = 1; i <= n; i++) laço de repetição for, que começa com o numero 1 
(i<=n)continua o laço enquantoi for menor ou igual ao n.
if (i % 2 == 0) se o numero for par
pares.push(i); adiciona o numero par ao array pares
else se o numero for impar
impares.push(i); adiciona o numero impar ao array impares
console.log(`Pares:${pares}`) mostra no console o array pares
console.log(`Impares:${impares}`) mostra no console o array impares
MostraParesEImpares(10) chama a funçao MostraParesEImpares com o parametro 10*/

