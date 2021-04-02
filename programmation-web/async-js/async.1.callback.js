const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const demarrerProgramme = () => {
  rl.question('Quel est ton prénom?', reponse => {
    console.log('Ton prénom est ' + reponse)
    rl.close()
  })
}

demarrerProgramme()