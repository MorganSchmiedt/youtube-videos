'use strict'

// Fonction qui génère un nombre aléatoire
// Retourne le nombre
const lancerDe = function () {
  // Générer un nombre entre 1 et 6
  const nombreDecimal = (Math.random() * 6) + 1
  const nombre = Math.trunc(nombreDecimal)

  // Retourner ce nombre
  return nombre
}

const afficherDe = function (nombre) {
  const imageElement = document.getElementById('image-resultat')
  imageElement.src = `/asset/de${nombre}.svg`
}

const clickBouton = function () {
  const resultat = lancerDe()

  const audio = new Audio('/asset/son.mp3')
  audio.play()
  audio.addEventListener('ended', () => afficherDe(resultat))
}

const bouton = document.getElementById('bouton-lancer-de')
bouton.addEventListener('click', clickBouton)