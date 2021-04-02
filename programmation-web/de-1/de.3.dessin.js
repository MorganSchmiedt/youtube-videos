// Fonction qui génère un nombre aléatoire
// Retourne le nombre
const lancerDe = function () {
  // Générer un nombre entre 1 et 6
  const nombreDecimal = (Math.random() * 6) + 1
  const nombre = Math.trunc(nombreDecimal)

  // Retourner ce nombre
  return nombre
}

const deTexte = {
  '1': 'Un',
  '2': 'Deux',
  '3': 'Trois',
  '4': 'Quatre',
  '5': 'Cinq',
  '6': 'Six',
}

const deDessin = {
  '1':
`------- 
|     |
|  o  |
|     |
-------`,
  '2':
`------- 
|o    |
|     |
|    o|
-------`,
  '3':
`------- 
|o    |
|  o  |
|    o|
-------`,
  '4':
`------- 
|o   o|
|     |
|o   o|
-------`,
  '5':
`------- 
|o   o|
|  o  |
|o   o|
-------`,
  '6':
`------- 
|o   o|
|o   o|
|o   o|
-------`,
}


// Afficher le résultat sous forme de nombre
// Afficher le résultat sous forme de text
const resultat = lancerDe()
console.log(resultat + ' (' + deTexte[resultat] + ')')

// Afficher le résultat sous forme de dé
console.log(deDessin[resultat])