const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const demanderPrenom = () => {
  return new Promise(resolve => {
    rl.question('Quel est ton prénom?', resolve)
  })
}

const demanderNom = () => {
  return new Promise(resolve => {
    rl.question('Quel est ton nom?', resolve)
  })
}

const demarrerProgramme = async() => {
  const prenom = await demanderPrenom()

  console.log('Ton prénom est ' + prenom)

  const nom = await demanderNom()

  console.log('Ton nom est ' + nom)

  rl.close()
}

demarrerProgramme()