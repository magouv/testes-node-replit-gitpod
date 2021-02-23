// Neste exemplo vamos inicializar o objeto de acesso
// ao banco de dados usando variáveis de ambiente

import dotenv from 'dotenv'
import pg from 'pg'

// Executando tudo
inicializaBackend()
testeBancoDeDados()


function inicializaBackend() {
    dotenv.config({path: "config.env"})     // carrega as variáveis de ambiente definidas em config.env

    // Vamos testar uma variável de ambiente
    console.log(`Executando: ${process.env.APP_NAME}`)
}

async function testeBancoDeDados() {
    const { Client } = pg

    // Pega as informações do banco de variáveis de ambiente
    var client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
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
