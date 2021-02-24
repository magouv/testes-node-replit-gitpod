// Execute esse script no seu computador: node ex5-....
// Abra o browser e acesse os endpoints acessíveis via verbo GET:
//      localhost:8080/
//      localhost:8080/ola
//      localhost:8080/status
// Para acessar o endpoint acessível com o verbo POST, use Postman ou curl:
//      $ curl -X POST localhost:8080/salva_arquivo
//      $ curl -X POST -d '{nome: "Marcelo"}' localhost:8080/salva_arquivo

import express from "express"
const { urlencoded, json } = express

const server = express()
server.use(urlencoded({ extended: true }))
server.use(json())

server.get("/", Raiz)
server.get("/ola", Ola)
server.get("/status", Status)
server.post("/salva_arquivo", SalvaArquivo)

server.listen(8080, InitMessage)

function Raiz(req, res) {
    return res.send("Agora o endpoint / funcionou!")
}

function Ola(req, res) {
    return res.send("Hello World")
}

function Status(req, res) {
    const obj = {
        mensagem: "Servidor esta online",
        timestamp: Date.now()
    }
    console.log("Status Acionado")
    return res.json(obj)
}

function SalvaArquivo(req, res) {
    console.log("Salvando Arquivo ...")
    const body = req.body
    console.log("request body:")
    console.log(body)
    return res.send("Arquivo Salvo")
}

function InitMessage() {
    console.log("Servidor Inicializado")
}