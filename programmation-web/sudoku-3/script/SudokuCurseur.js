export default class SudokuCurseur {
  constructor() {
    this.ligne = 0
    this.col = 0
    this.marche = 'avant'
  }

  // Progresse le curseur selon l'état de marche,
  // SOit en avant, soit en arriere
  // Retourne si oui ou non le curseur a bien pu avancer
  // ou reculer
  progresse() {
    // Si marche avant
    if (this.marche === 'avant') {
      // Avancer le curseur
      return this.avance()
    } else {
      // Si la marche est arriere
      // Reculer le curseur
      return this.recule()
    }
  }

  avance() {
    // Si le curseur est au bout de la ligne
    if (this.ligne === 8
    && this.col === 8) {
      // Retourner faux
      return false
    }
    
    // Sinon
    // Si le curseur est en bout de ligne
    if (this.col === 8) {
      // Ligne suivante, colonne 0
      this.ligne += 1
      this.col = 0
    } else {
      // Si le curseur n'est pas en bout de ligne
      // Meme ligne, colonne suivante
      this.col += 1
    }

    // Retourne si le curseur a bien avancé
    return true
  }

  recule() {
    // Si le curseur est en premiere position
    if (this.ligne === 0
    && this.col === 0) {
      // Retourner faux 
      return false
    }
    
    // Sinon
    if (this.col === 0) {
      // Si la colonne est en premiere position
      // Aller a la ligne precedente, derniere position
      this.ligne -= 1
      this.col = 8
    } else {
      // Sinon 
      // Recule d'une colonne
      this.col -= 1
    }

    return true
    // Retourne si le curseur a bien reculé
  }
}