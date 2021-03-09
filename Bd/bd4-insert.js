import dotenv from 'dotenv'
import pg from 'pg'

// Executa tudo
inicializaBackend()
testeDatabaseInsert()

function inicializaBackend() {
    dotenv.config()

    // Vamos testar uma variável de ambiente
    console.log(`Executando: ${process.env.APP_NAME}`)
}

async function testeDatabaseInsert() {
    const { Client } = pg

    // Pega as informações do banco de variáveis de ambiente
    var client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })

    await client.connect()

    const sql = `SELECT * FROM tesouro_direto where ind_cv = $1;`
    const result = await client.query(sql, ["v"])

    console.log(result.rows)

    await client.end()
}