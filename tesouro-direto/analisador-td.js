class MovimentoTD {
    constructor(user, corret, isin, dtneg, cv, lote, quant, vlliq ) {
        this.idUser = user
        this.idCorretora = corret
        this.codIsin = isin
        this.dataNegociacao = stringToDate(dtneg)
        this.indicadorCV = cv
        this.idLote = lote
        this.quantidade = quant
        this.valorLiquido = vlliq
    }
}

function analisaNotaNegociacaoTD(estoqueInicial, operacoes) {
    var operacoesFinais = []

    var estoqueOrdenado = ordenaEstoquePorData(estoqueInicial)

    for (let index = 0; index < operacoes.length; index++) {
        const mov = operacoes[index];

        if (mov.indicadorCV === "c") {
            mov.idLote = "l5"
            operacoesFinais.push(mov)
        }
        else {
            // percorre estoqueOrdenado e quando encontrar o mesmo titulo,
            // na mesma corretora e com data anterior a venda, tenta consumir
            // o estoque com a quantidade a vender.
            // A cada consumo de bloco, adiciona o bloco consumido a lista de saída
        }
    }

    return operacoesFinais
}

function stringToDate(dateString) {
    const [dd, mm, yyyy] = dateString.split("/")
    return new Date(`${yyyy}-${mm}-${dd}`)
}

function ordenaEstoquePorData(estoque) {
    const estoqueOrdenado = estoque.sort((a, b) => a.dataNegociacao - b.dataNegociacao)
    return estoqueTD
}


// Estoque inicial
var estoqueTD = []
var td1 = new MovimentoTD("M", "A", "LFT25", "1/2/2021", "c", "l1", 100, 1000)
var td2 = new MovimentoTD("M", "B", "LFT25", "2/2/2021", "c", "l2", 20, 200)
var td3 = new MovimentoTD("M", "A", "LTN35" ,"3/2/2021", "c", "l3", 50, 500)
var td4 = new MovimentoTD("M", "A", "LFT25", "4/2/2021", "c", "l4", 100, 1000)
estoqueTD.push(td4)
estoqueTD.push(td1)
estoqueTD.push(td3)
estoqueTD.push(td2)


// Nota negociação a processar
var nn1 = []
var mov1 = new MovimentoTD("M", "A", "LFT25", "6/2/2021", "v", null, 120, 1250)
var mov2 = new MovimentoTD("M", "A", "NTNB45", "6/2/2021", "c", null, 200, 2200)
nn1.push(mov1)
nn1.push(mov2)

// console.log("--------------------------")
// console.log(estoqueTD)
// console.log("--------------------------")
// console.log(nn1)
// console.log("--------------------------")

var opFinais = analisaNotaNegociacaoTD(estoqueTD, nn1)

console.log(opFinais)
