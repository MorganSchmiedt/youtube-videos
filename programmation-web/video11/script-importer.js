const nombreAleatoire = nombreMax =>
  Math.trunc(Math.random() * nombreMax + 1)

const importerGrille = async() => {
  // Récupérer les données JSON du fichier
  // Créer un objet à partir des données JSON
  const grilles = await fetch('grilles.json')
    .then(reponse => {
      if (reponse.ok === true) {
        return reponse.json()
      } else {
        return Promise.reject('Fichier pas trouvé!!')
      }
    })

  // Choisir aléatoirement une grille dans la liste
  const numeroGrille = nombreAleatoire(grilles.length)
  const sudoku = grilles[numeroGrille - 1]
  const grille = sudoku.grille

  // Parcourir les lignes et les colonnes du tableau de tableau
  for (let ligne = 0; ligne < 9; ligne += 1) {
    for (let col = 0; col < 9; col += 1) {
      const valeur = grille[ligne][col]

      // Pour chaque champ,
      // Si y'a une valeur,
      if (valeur != null) {
        // Rendre le champ texte non modifiable
        const identifiant = 'case' + ligne + '-' + col
        const input = document.getElementById(identifiant)
        input.readOnly = true

        // Ajouter la valeur au champ
        input.value = valeur
      }

      
      // Si y'a pas de valeur, 
      // Ne rien faire
    }
  }
  
}

importerGrille()