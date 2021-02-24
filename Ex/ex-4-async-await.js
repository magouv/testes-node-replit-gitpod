// Testando funções assíncronas

import fetch from 'node-fetch'

async function getPerson(id) {
  const response = await fetch(`https://api.github.com/users/${id}`)
  const person = await response.json()
  console.log(person.name)
}


getPerson("magouv")
  .then(() => console.log("Concluído"))
  .catch((e) => console.error(e))
