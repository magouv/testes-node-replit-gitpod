import axios from 'axios'
import https from 'https'

async function leApiTD() {
    try {
        const httpsAgent = new https.Agent({ rejectUnauthorized: false })

        const resp = await axios.get(
            'https://www.tesourodireto.com.br/json/br/com/b3/tesourodireto/service/api/treasurybondsinfo.json',
            { httpsAgent }
        )

        const listaTD = resp.data.response.TrsrBdTradgList

        for (let i = 0; i < listaTD.length; i++) {
            const td = listaTD[i];
            console.log("-------------------------------------")
            console.log(td.TrsrBd.nm)
            console.log(td.TrsrBd.isinCd)
            console.log(td.TrsrBd.untrRedVal)
            console.log(td.TrsrBd.mtrtyDt)
        }
    } catch (e) {
        console.error(e)
    }
}

leApiTD()


// Exemplo de resultado:

// Tesouro Selic 2023
// BRSTNCLF1R82
// 10769.22
// 2023-03-01T00:00:00
// -------------------------------------
// Tesouro Selic 2024
// BRSTNCLF0008
// 10732.24
// 2024-09-01T00:00:00
// -------------------------------------
// Tesouro Selic 2025
// BRSTNCLF1RC4
// 10718.31
// 2025-03-01T00:00:00
// -------------------------------------
// Tesouro Selic 2027
// BRSTNCLF1RG5
// 10577.38
// 2027-03-01T00:00:00



// Elementos de listaTD:
//
// {
//     TrsrBd: {
//       cd: 171,
//       nm: 'Tesouro Selic 2024',
//       featrs: 'Título com rentabilidade diária vinculada à taxa de juros da economia (taxa Selic). Isso significa que se a taxa Selic aumentar a sua rentabilidade aumenta e se a taxa Selic diminuir, sua rentabilidade diminui.\r\n',
//       mtrtyDt: '2024-09-01T00:00:00',
//       minInvstmtAmt: 107.35,
//       untrInvstmtVal: 10735.95,
//       invstmtStbl: 'Como não paga juros semestrais, é mais interessante para quem pode deixar o dinheiro render até o vencimento do investimento\r\n',
//       semiAnulIntrstInd: false,
//       rcvgIncm: 'Indicado para aqueles que querem realizar investimentos de curto prazo\r\n',
//       anulInvstmtRate: 0.1727,
//       anulRedRate: 0.1827,
//       minRedQty: 0.01,
//       untrRedVal: 10732.24,
//       minRedVal: 107.32,
//       isinCd: 'BRSTNCLF0008',
//       FinIndxs: { cd: 17, nm: 'SELIC' }
//     }
//   }

