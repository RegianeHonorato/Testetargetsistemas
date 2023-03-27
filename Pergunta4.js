FaturamentoEstados  =  [
    {
        "estado" : "SP" ,
        "faturamento" : 67836.43
    } ,
    {
        "estado" : "RJ" ,
        "faturamento" : 36678.66 ,
    } ,
    {
        "estado" : "MG" ,
        "faturamento" : 29229.88 ,
    } ,
    {
        "estado" : "ES" ,
        "faturamento" : 27165.48 ,
    } ,
    {
        "estado" : "Outros" ,
        "faturamento" : 19849.53
    } ,
]

let  totalFaturamento  =  faturamentoEstados . map ( ( { recebimento } ) => faturamento ) . reduzir ( ( totalFaturamento , faturamento ) => {
    return  totalFaturamento + faturamento
} )



let  faturamentoPercentualCadaEstado  =  faturamentoEstados . mapa ( estado => {
    estado . percentual  =  ( ( estado . faturamento / totalFaturamento ) * 100 )
    retornar  estado
} )
console . log ( faturamentoPercentualCadaEstado ) ;


faturamentoPercentualCadaEstado . forEach (  estado  =>  {
console . log ( `O percentual do faturamento mensal total do estado ${ estado . estado } foi de: ${ estado . percentual . toFixed ( 2 ) } % ` )
} ) ;