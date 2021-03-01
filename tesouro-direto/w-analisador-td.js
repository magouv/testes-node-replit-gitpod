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
notaNeg.push(mov1)
notaNeg.push(mov2)

// Chama a Função para processar a Nota de Negociação
var opFinais = analisaNotaNegociacaoTD(estoqueTD, notaNeg)

console.log(opFinais)


//###################################################################

// Função Principal que analisa e processa a Nota de Negociação e envia para estoque
function analisaNotaNegociacaoTD(recebEstoqueTD, recebNotaNeg) {
    var operacoesFinais = []

    var estoqueOrdenado = ordenaEstoquePorData(recebEstoqueTD)

    for (let index = 0; index < recebNotaNeg.length; index++) {
        const mov = recebNotaNeg[index];

        if (mov.indicadorCV === "c") {
            mov.idLote = "l5"
            operacoesFinais.push(mov)
        }
        else {
          for (let index = 0; index < recebNotaNeg.length; index++) {
            const movNn = recebNotaNeg[index]

            var quantVendSaldo = movNn.quantidade

            for(let i = 0; i < recebEstoqueTD.length; i++) {
              const movEst = recebEstoqueTD[i]

              if(movEst.codIsin === movNn.codIsin && movNn.indicadorCV === "v" && movEst.idCorretora === movNn.idCorretora) {
                let quantComprado = movEst.quantidade
                //console.log("passou por aqui:  " + movEst.idLote)
                //console.log("passou por aqui:  " + quantVendSaldo)
                //console.log("passou por aqui:  " + quantComprado)

                if(quantVendSaldo >= quantComprado) {
                  quantVendSaldo = quantVendSaldo - quantComprado
                  }
                
                //console.log("Saldo da Venda   " + quantVendSaldo)

                if(quantVendSaldo == 0) {
                  operacoesFinais.push(recebNotaNeg[index])
                  console.log("passou por aqui")
                  }
                }
              }
              
            }
            if(quantVendSaldo > 0){
                console.log("Você digitou o valor de venda ERRADO")
              }

          }
        }
    

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