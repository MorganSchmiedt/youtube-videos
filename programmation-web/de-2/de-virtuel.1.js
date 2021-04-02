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

const clickBouton = function () {
  const resultat = lancerDe()

  const container = document.getElementById('container-resultat')
  container.textContent = resultat
}

const bouton = document.getElementById('bouton-lancer-de')
bouton.addEventListener('click', clickBouton)