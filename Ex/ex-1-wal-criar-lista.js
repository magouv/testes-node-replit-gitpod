class ItemTD {    
  codigo;
  indicadorCV;
  dataNegociacao;
  quantidade;
  valorLiquido;    
}

// criando a tabela
const tabela = []
const td1 = new ItemTD()
const td2 = new ItemTD()

// Criamos os objetos (lista e itens de TD)
td1.codigo = "LFT25"
td1.indicadorCV = "c"
td1.dataNegociacao = "1/2/2021"
td1.quantidade = 100.0
td1.valorLiquido = 1000.0

td2.codigo = "LFT30"
td2.indicadorCV = "v"
td2.dataNegociacao = "1/10/2020"
td2.quantidade = 200.0
td2.valorLiquido = 2000.0


tabela.push(td1)
tabela.push(td2)

//Filtro

function retornaVenda (value){
    if (value.indicadorCV == "v")
    return value;
}
var vendas = tabela.filter(retornaVenda);
vendas.forEach(vendido => { 
    console.log(vendido);
})

//console.log(tabela)
