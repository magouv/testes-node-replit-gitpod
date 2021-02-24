// Leia antes: docs/estudo-listas.docx

class ItemTD {
    constructor(cod, indCV, strDataNegoc, quant, valorLiq) {
        this.codigo = cod
        this.indicadorCV = indCV
        this.dataNegociacao = strDataNegoc
        this.quantidade = quant
        this.valorLiquido = valorLiq
    }
}

// Criamos os objetos (lista e itens de TD)
const tabela = []
var td1 = new ItemTD("LFT25", "c", "1/2/2021", 100.0, 1000.0)
var td2 = new ItemTD("LTN35", "c", "2/2/2021", 50.0, 101.0)
var td3 = new ItemTD("LFT25", "v", "4/2/2021", 30.0, 305.0)

// Inserimos os itens na lista
tabela.push(td1)
tabela.push(td2)
tabela.push(td3)

console.log(tabela)
