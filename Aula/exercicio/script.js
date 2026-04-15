let n = parseInt(prompt("quantos números irá digitar?"));
let numeros = []
for (let i = 0; 1 < n; i++) {
    let num = parseInt(prompt("digite um numero:"));
    numeros.push(num);
}
let pares = 0;
for (let i = 0; i < n; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(numeros[i]);
        pares++;
    }
}

console.log("quantidade de pares", pares)