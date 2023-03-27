let num = parseInt(prompt("Digite um número: "));
let anterior = 0;
let atual = 1;

while (atual < num) {
  let proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}

if (atual === num) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}