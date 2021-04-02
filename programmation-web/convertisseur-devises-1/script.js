// Récupérer les deux champs
const eurgbpInput = document.getElementById('input-eurgbp')
const gbpeurInput = document.getElementById('input-gbpeur')

// Associer un événement qui correspond au changement
// de la valeur du champ
eurgbpInput.addEventListener('input', () => {
  // Récupérer la valeur saisie par l'utilisateur
  const eur = eurgbpInput.value

  // Convertir la valeur en nombre
  const eurNombre = parseFloat(eur)

  // Récupérer le taux
  const taux = gbpeurInput.getAttribute('data-taux')

  // Convertir le taux en nombre
  const tauxNombre = parseFloat(taux)

  // Calculer la nouvelle conversion
  const nouvelleConversion = eurNombre * tauxNombre
  
  console.log(nouvelleConversion)

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5)

  console.log(nouvelleConversionTexte)

  // Mettre à jour le champ
  gbpeurInput.value = nouvelleConversionTexte
})

gbpeurInput.addEventListener('input', () => {
  // Récupérer la valeur saisie par l'utilisateur
  const gbp = gbpeurInput.value

  // Convertir la valeur en nombre
  const gbpNombre = parseFloat(gbp)

  // Récupérer le taux
  const taux = gbpeurInput.getAttribute('data-taux')

  // Convertir le taux en nombre
  const tauxNombre = parseFloat(taux)

  // Calculer la nouvelle conversion
  const nouvelleConversion = gbpNombre / tauxNombre

  console.log(nouvelleConversion)

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5)

  console.log(nouvelleConversionTexte)

  // Mettre à jour le champ
  eurgbpInput.value = nouvelleConversionTexte
})