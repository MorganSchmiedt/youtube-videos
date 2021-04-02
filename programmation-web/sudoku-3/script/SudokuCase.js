export default class SudokuCase {
  constructor() {
    this.estValeurInitiale = false
    this.initialiserValeurs()
  }

  initialiserValeurs() {
    this.valeursPossibles = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }

  definirValeurInitiale(valeur) {
    this.valeur = valeur
    this.estValeurInitiale = true
  }

  prochaineValeur() {
    // Récupérer et Retirer la premiere valeur du tableau
    this.valeur = this.valeursPossibles.shift()

    // Retourner cette valeur
    return this.valeur
  }
}