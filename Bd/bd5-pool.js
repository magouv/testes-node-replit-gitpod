// Pool ainda não está funcionando....!!!!!!

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
    const { Pool } = pg

    // Pega as informações do banco de variáveis de ambiente
    var pool = new Pool({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })

    await pool.connect()

    let d = new Date("2021-2-1")

    const sql = `INSERT INTO public.tesouro_direto
        (codigo, ind_cv, data_negoc, quant, valor_liq)
        VALUES($1, $2, $3, $4, $5);`

    await pool.query(sql, ["WAL4", "c", d, 30, 3000])

    console.log("passei aqui 1")
    pool.end()
    .then(r => {console.log(r)})
    .catch(r => {console.log(r)})

    console.log("passei aqui 2")
}