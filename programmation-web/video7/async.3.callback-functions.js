const readLine = require('readline')

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const demarrerProgramme = () => {
  const lireNom = nom => {
    console.log('Ton nom est ' + nom)
    rl.question('Quel est ton age?', lireAge)
  }

  const lireAge = age => {
    console.log('Ton age est ' + age)
    rl.close()
  }

  const lirePrenom = prenom => {
    console.log('Ton prénom est ' + prenom)
    rl.question('Quel est ton nom?', lireNom)
  }

  rl.question('Quel est ton prénom?', lirePrenom)
}

demarrerProgramme()