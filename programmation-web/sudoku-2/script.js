const ajouterErreurChamp = (ligne, col) => {
  const input = document.getElementById('case' + ligne + '-' + col)
  input.classList.add('invalide')
  input.addEventListener('input', () => {
    input.classList.remove('invalide')
  }, { once: true })
}

const verifier = () => {
  // Vérifier que les nombres saisis sont bien des nombres de 1 à 9

  // Récupérer tous les input de la page
  const listeInput = document.querySelectorAll('input')

  // Enlever toutes les classes invalides
  for (const input of listeInput) {
    input.classList.remove('invalide')
  }

  // Chacun des inputs
  for (const input of listeInput) {
    // Verifier que le champs est valide
    const validiteInput = input.checkValidity()

    if (validiteInput === false) {
      // Si c'est pas valide, arrêtez le programme
      return
    }
  }

  // Tableau qui contient toutes les lignes
  const sudoku = []

  // Récuperer toutes les valeurs
  for (let ligne = 0; ligne < 9; ligne += 1) {
    const sudokuLigne = []

    for (let col = 0; col < 9; col += 1) {
      const identifiant = 'case' + ligne + '-' + col
      const input = document.getElementById(identifiant)
      const valeur = input.value
      const nombre = valeur === ''
        ? ''
        : parseInt(valeur, 10)

      // Ajouter la valeur a la ligne
      sudokuLigne.push(nombre)
    }

    // Ajouter la ligne au sudoku
    sudoku.push(sudokuLigne)
  }

  // Vérifier que y'ait pas de doublons dans les lignes

  // Parcourir les lignes
  for (let ligne = 0; ligne < 9; ligne += 1) {
    const liste = new Set()

    // Parcourir les éléments de la ligne
    for (let col = 0; col < 9; col += 1) {
      const valeur = sudoku[ligne][col]

      // Si la valeur est vide, ne rien faire
      if (valeur === '') {

      } else {
        // Sinon
        const valeurExiste = liste.has(valeur)

        // Vérifier que l'élément n'est pas dans la liste
        if (valeurExiste) {
          console.log('Erreur doublon' + ligne + '-' + col)

          // Ajouter une classe d'erreur au champs
          ajouterErreurChamp(ligne, col)
        } else {
          // Ajouter l'élément à une liste
          liste.add(valeur)
        }
      }
    }
  }

  // Parcourir les colonnes
  for (let col = 0; col < 9; col += 1) {
    const liste = new Set()

    // Parcourir les éléments de la ligne
    for (let ligne = 0; ligne < 9; ligne += 1) {
      const valeur = sudoku[ligne][col]

      // Si la valeur est vide, ne rien faire
      if (valeur === '') {

      } else {
        // Sinon
        const valeurExiste = liste.has(valeur)

        // Vérifier que l'élément n'est pas dans la liste
        if (valeurExiste) {
          console.log('Erreur doublon' + ligne + '-' + col)

          // Ajouter une classe d'erreur au champs
          ajouterErreurChamp(ligne, col)
        } else {
          // Ajouter l'élément à une liste
          liste.add(valeur)
        }
      }
    }
  }

  // Indices des carrés
  const carres = [
    [
      [0, 0], [0, 1], [0, 2],
      [1, 0], [1, 1], [1, 2],
      [2, 0], [2, 1], [2, 2],
    ],
    [
      [0, 3], [0, 4], [0, 5],
      [1, 3], [1, 4], [1, 5],
      [2, 3], [2, 4], [2, 5],
    ],
    [
      [0, 6], [0, 7], [0, 8],
      [1, 6], [1, 7], [1, 8],
      [2, 6], [2, 7], [2, 8],
    ],
    [
      [3, 0], [3, 1], [3, 2],
      [4, 0], [4, 1], [4, 2],
      [5, 0], [5, 1], [5, 2],
    ],
    [
      [3, 3], [3, 4], [3, 5],
      [4, 3], [4, 4], [4, 5],
      [5, 3], [5, 4], [5, 5],
    ],
    [
      [3, 6], [3, 7], [3, 8],
      [4, 6], [4, 7], [4, 8],
      [5, 6], [5, 7], [5, 8],
    ],
    [
      [6, 0], [6, 1], [6, 2],
      [7, 0], [7, 1], [7, 2],
      [8, 0], [8, 1], [8, 2],
    ],
    [
      [6, 3], [6, 4], [6, 5],
      [7, 3], [7, 4], [7, 5],
      [8, 3], [8, 4], [8, 5],
    ],
    [
      [6, 6], [6, 7], [6, 8],
      [7, 6], [7, 7], [7, 8],
      [8, 6], [8, 7], [8, 8],
    ],
  ]

  // Parcourir les carrés
  for (const carre of carres) {
    const liste = new Set()

    // Pour chaque carré
    for (const element of carre) {
      const ligne = element[0]
      const col = element[1]

      const valeur = sudoku[ligne][col]

      // Si la valeur est vide, ne rien faire
      if (valeur === '') {

      } else {
        // Sinon
        const valeurExiste = liste.has(valeur)

        // Vérifier que l'élément n'est pas dans la liste
        if (valeurExiste) {
          console.log('Erreur doublon' + ligne + '-' + col)

          // Ajouter une classe d'erreur au champs
          ajouterErreurChamp(ligne, col)
        } else {
          // Ajouter l'élément à une liste
          liste.add(valeur)
        }
      }
    }
  }
  // Utiliser les indices pour vérifier les doublons
}


// Récupérer le bouton
const button = document.getElementById('button-verifier')

// Assigner l'événement click à la function vérifier
button.addEventListener('click', verifier)