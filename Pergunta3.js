let faturamentosDiarios = require('./dados.json')

let faturamentosDiariosDiasUteis = faturamentosDiarios.filter((faturamento)=>faturamento.valor!=0)

let menorFaturamento = faturamentosDiariosDiasUteis.map(({valor}) => valor).reduce(function(a,b){
    return Math.min(a,b)
})

let maiorFaturamento = faturamentosDiariosDiasUteis.map(({valor}) => valor).reduce(function(a,b){
    return Math.max(a,b)
})

let totalFaturamento = faturamentosDiariosDiasUteis.map(({valor})=> valor).reduce((totalFaturamento,valor)=>{
    return totalFaturamento+valor;
});

let mediaFaturamento = totalFaturamento/faturamentosDiariosDiasUteis.length

console.log(`O menor faturamento foi de: ${menorFaturamento} `);
console.log(`O maior faturamento foi de: ${maiorFaturamento} `);
console.log(`A média de faturamento foi de: ${mediaFaturamento} `);
