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

const afficherPrenom = prenom => {
  console.log('Ton prénom est ' + prenom)
}

const demanderNom = () => {
  return new Promise(resolve => {
    rl.question('Quel est ton nom?', resolve)
  })
}

const afficherNom = nom => {
  console.log('Ton nom est ' + nom)
}

const demanderAge = () => {
  return new Promise(resolve => {
    rl.question('Quel est ton age?', resolve)
  })
}

const afficherAge = age => {
  console.log('Ton age est ' + age)
}

const demarrerProgramme = () => {
  demanderPrenom()
    .then(prenom => afficherPrenom(prenom))
    .then(() => demanderNom())
    .then(nom => afficherNom(nom))
    .then(() => demanderAge())
    .then(age => afficherAge(age))
    .then(() => rl.close())
}

demarrerProgramme()