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
  const bouton = document.getElementById('bouton-lancer-de')
  bouton.disabled = true

  const ancienText = bouton.textContent
  bouton.textContent = '🤞🏼🤞🏼🤞🏼'

  const image = document.getElementById('image-resultat')
  image.removeAttribute('src')

  const audio = new Audio('/asset/son.mp3')
  audio.play()
  audio.addEventListener('ended', () => {
    const resultat = lancerDe()
    image.src = `/asset/de${resultat}.svg`

    bouton.textContent = ancienText
    bouton.disabled = false
  })
}

const bouton = document.getElementById('bouton-lancer-de')
bouton.addEventListener('click', clickBouton)