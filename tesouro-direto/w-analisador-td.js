// Recebe os dados da Nota de Negociação e dá destino para os ativos TD:

// Cria uma classe de Movimentos do TD
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

// cria Estoque inicial
var estoqueTD = []
var td1 = new MovimentoTD("M", "A", "LFT25", "1/2/2021", "c", "l1", 100, 1000)
var td2 = new MovimentoTD("M", "B", "LFT25", "2/2/2021", "c", "l2", 20, 200)
var td3 = new MovimentoTD("M", "A", "LTN35" ,"3/2/2021", "c", "l3", 50, 500)
var td4 = new MovimentoTD("M", "A", "LFT25", "4/2/2021", "c", "l4", 100, 1000)
estoqueTD.push(td4)
estoqueTD.push(td1)
estoqueTD.push(td3)
estoqueTD.push(td2)

// Cria uma Nota negociação a processar
var notaNeg = []
var mov1 = new MovimentoTD("M", "A", "LFT25", "6/2/2021", "v", null, 120, 1250)
var mov2 = new MovimentoTD("M", "A", "NTNB45", "6/2/2021", "c", null, 200, 2200)
var mov3 = new MovimentoTD("M", "A", "LFT25", "6/2/2021", "v", null, 100, 1250)
notaNeg.push(mov1)
notaNeg.push(mov2)
notaNeg.push(mov3) // Teste de uma segunda venda igual a primeira no mesmo dia

// Chama a Função para processar a Nota de Negociação
var opFinais = analisaNotaNegociacaoTD(estoqueTD, notaNeg)

console.log(opFinais)


//###################################################################

// Função Principal que analisa e processa a Nota de Negociação e envia para estoque
function analisaNotaNegociacaoTD(recebEstoqueTD, recebNotaNeg) {
    var operacoesFinais = []

    var estoqueOrdenado = ordenaEstoquePorData(recebEstoqueTD)

    // loop para percorrer a Nota de Negociação
    for (let i = 0; i < recebNotaNeg.length; i++) {
        const movNotaNeg = recebNotaNeg[i];

        // Roda todos os TDs da Nota de Neg.
        if (movNotaNeg.indicadorCV === "c") {
            movNotaNeg.idLote = "l5"
            operacoesFinais.push(movNotaNeg)
        }
        else {
            var quantNNSaldo = parseInt(movNotaNeg.quantidade)
            //console.log("Quant na NotNeg Saldo1   " + quantNNSaldo)

            // loop para todos os TDs em Estoque
            for(let j = 0; j < recebEstoqueTD.length; j++) {
              const movEstoq = recebEstoqueTD[j]

              if(movEstoq.codIsin === movNotaNeg.codIsin && movNotaNeg.indicadorCV === "v" && movEstoq.idCorretora === movNotaNeg.idCorretora) {
                let quantComprEst = parseInt(movEstoq.quantidade)
                //console.log("passou por aqui:  " + movEst.idLote)
                //console.log("passou por aqui:  " + quantNNSaldo)
                //console.log("Quant Estoq Comprada2:  " + quantComprEst)
                //console.log("Quant na NotNeg Saldo3   " + quantNNSaldo)

                if(movEstoq.quantidade >= quantComprEst) {
                  quantNNSaldo = quantNNSaldo - quantComprEst
                  }
                
                console.log("Quant na NotNeg Saldo4   " + quantNNSaldo)
                //console.log("Quant Estoq Comprada5   " + quantComprEst)

                if(quantNNSaldo <= 0) {
                  operacoesFinais.push(recebNotaNeg[i]) // Evitar que ele cadastrre duas vezes o mesmo pedido
                  //console.log("passou por aqui")
                  }
                }
              } // final do For j
              
            if(quantNNSaldo > 0){
                console.log("Quantidade de Venda é MAIOR do que a Compra")
              }

          } // final do IF
        } // final do FOR i
    

    return operacoesFinais
}

function stringToDate(dateString) {
    const [dd, mm, yyyy] = dateString.split("/")
    return new Date(`${yyyy}-${mm}-${dd}`)
}

function ordenaEstoquePorData(estoque) {
    const enviaEstoqueOrdenado = estoque.sort((a, b) => a.dataNegociacao - b.dataNegociacao)
    return enviaEstoqueOrdenado
}