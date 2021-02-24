

import pg from 'pg'

async function testeBancoDeDados() {
    const { Client } = pg

    var client = new Client({
        host: 'motty.db.elephantsql.com',
        port: 5432,
        user: 'yqgnlusz',
        password: 'gDVpjZGbBWZ2w0p8Ty9PRPWvxtY2T7-m',
        database: 'yqgnlusz',
    })

    // Obs: em vários trechos usamos 'await' pois são procedimentos assíncronos
    // e não sabemos quanto tempo pode demorar para serem executados. O 'await'
    // pára a execução até obter a resposta.

    // Faz a conexão com o banco
    await client.connect()
    
    // Executa uma query
    const sql = `select * from tesouro_direto`
    const result = await client.query(sql)

    // Percorre todas as linhas da resposta e imprime
    for (let i = 0; i < result.rows.length; i++) {
        const linha = result.rows[i]
        console.log(linha)
    }

    // Nosso programa termina aqui e então é uma boa prática encerrarmos a conexão
    // com o banco de dados para não deixar uma conexão aberta ociosa no servidor.
    await client.end()
}

// Executando tudo
testeBancoDeDados()
