import SudokuCase from './SudokuCase.js'
import SudokuCurseur from './SudokuCurseur.js'

export default class Sudoku {
  constructor(grille) {
    this.grille = []
    this.evenements = new Map()

    // Parcourir toutes les lignes et toutes les colonnes
    for (let ligne = 0; ligne < 9; ligne += 1) {
      const grilleLigne = []

      for (let col = 0; col < 9; col += 1) {
        const valeur = grille[ligne][col]
        const cellule = new SudokuCase()

        // Si la case a une valeur
        if (valeur !== '') {
          // Indiquer le fait qu'elle puisse pas être modifié
          // Et définir la valeur
          cellule.definirValeurInitiale(valeur)
        }
  
        grilleLigne.push(cellule)
      }

      this.grille.push(grilleLigne)
    }
  }

  async resoudre() {
    // Instancier le curseur
    const curseur = new SudokuCurseur()

    do {
      // Effectuer les recherches
      // Recupérer la valeur la ou se situe le curseur
      const cell = this.grille[curseur.ligne][curseur.col]

      // Si la valeur de la cellule est une valeur initiale
      if (cell.estValeurInitiale) {
        // Ne rien faire
      } else {
        let continuerRecherches = true

        while (continuerRecherches) {
          // Récupérer la prochaine valeur à tester
          const valeur = cell.prochaineValeur()

          // Lancer l'événement valeur
          // Récuprer la fonction à lancer
          const callback = this.evenements.get('valeur')

          // Si elle existe
          if (callback != null) {
            callback(curseur.ligne, curseur.col, valeur)
          }

          // Si la valeur existe (càd toutes les possibilitées
          // ne sont pas encore testées)
          if (valeur != null) {
            // Tester si le sudoku est encore valide
            if (this.estValide()) {
              // Arrêter les recherches
              continuerRecherches = false
              curseur.marche = 'avant'
            } else {
              // Si le sudoku comporte une erreur
              // Continuer les recherches
            }
          } else {
            // S'il n'y a plus de possibilitées 
            // Arrêter les recherches
            continuerRecherches = false

            // Revenir en arriere
            curseur.marche = 'arriere'

            // Réinitialiser toutes les possibilités
            // Pour la prochaine fois ou le curseur passera
            cell.initialiserValeurs()
          }
        }
      }

      // Délai d'attente
      await new Promise(resolve => setTimeout(resolve, 10))
      
      // Tant que tu peux progresser
    } while(curseur.progresse())
  }

  // Retourne si OUI ou NON le sudoku est valider
  // càd qu'il ne comporte pas d'erreur
  estValide() {
    // Vérifier que y'ait pas de doublons dans les lignes

    // Parcourir les lignes
    for (let ligne = 0; ligne < 9; ligne += 1) {
      const liste = new Set()

      // Parcourir les éléments de la ligne
      for (let col = 0; col < 9; col += 1) {
        const sudokuCase = this.grille[ligne][col]
        const valeur = sudokuCase.valeur

        // Si la valeur est vide, ne rien faire
        if (valeur == null) {

        } else {
          // Sinon
          const valeurExiste = liste.has(valeur)

          // Vérifier que l'élément n'est pas dans la liste
          if (valeurExiste) {
            console.log('Erreur doublon' + ligne + '-' + col)

            return false
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
        const sudokuCase = this.grille[ligne][col]
        const valeur = sudokuCase.valeur

        // Si la valeur est vide, ne rien faire
        if (valeur == null) {

        } else {
          // Sinon
          const valeurExiste = liste.has(valeur)

          // Vérifier que l'élément n'est pas dans la liste
          if (valeurExiste) {
            console.log('Erreur doublon' + ligne + '-' + col)

            return false
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

        const sudokuCase = this.grille[ligne][col]
        const valeur = sudokuCase.valeur

        // Si la valeur est vide, ne rien faire
        if (valeur == null) {

        } else {
          // Sinon
          const valeurExiste = liste.has(valeur)

          // Vérifier que l'élément n'est pas dans la liste
          if (valeurExiste) {
            console.log('Erreur doublon' + ligne + '-' + col)

            return false
          } else {
            // Ajouter l'élément à une liste
            liste.add(valeur)
          }
        }
      }
    }

    return true
  }

  ajouterEvenement(nom, callback) {
    this.evenements.set(nom, callback)
  }
}