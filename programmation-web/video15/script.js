import chargerDonnees from './chargement.js'

const chargerPage = async() => {
  const DEVISES = await chargerDonnees()

  console.log(DEVISES)

  // Récupérer toutes les propriétés de l'objet DEVISES
  const listeDevises = Object.keys(DEVISES)

  console.log(listeDevises)

  // Pour chaque devise
  // Personnaliser la ligne de code HTML

  const fragment = document.createDocumentFragment()

  for (const devise of listeDevises) {
    const taux = DEVISES[devise].toFixed(5)

    const divElement = document.createElement('div')
    divElement.innerHTML = `
    <div class="devise">
      <input type="number" id="eur-${devise}" step="0.00001" value="1">
      <span>EUR</span>
      <span class="egal">⬅➡</span>
      <input type="number" id="${devise}-eur" step="0.00001" value="${taux}">
      <span>${devise.toUpperCase()}</span>
    </div>`

    fragment.appendChild(divElement)
  }

  // Récupérer le container
  const container = document.getElementById('container')

  // Ajouter le fragment au container
  container.appendChild(fragment)

  const changementValeur = e => {
    // Récuper le champs qui a soulevé l'événement
    const input = e.target
    const identifiant = input.id

    // Identifiant: "eur-czk" par exemple

    // Récupérer la valeur saisi par l'utilisateur
    const valeurTexte = input.value

    // Convertir la valeur en nombre
    const valeurNombre = parseFloat(valeurTexte)

    // Récupérer la source et la destination
    const devisesParties = identifiant.split('-')

    // La source = 1er élément du tableau
    const deviseSource = devisesParties[0]

    // La destination = 2eme élément du tableau
    const deviseDestination = devisesParties[1]

    // Récupérer le taux
    let nouvelleConversion

    // Cas 1: La valeur modifiée est la valeur en EUR
    if (deviseSource === 'eur') {
      const taux = DEVISES[deviseDestination]

      // Calculer la nouvelle conversion
      nouvelleConversion = valeurNombre * taux
    } else {
      // Cas 2: La valeur modifiée est la valeur en Devises 
      const taux = DEVISES[deviseSource]

      // Calculer la nouvelle conversion
      nouvelleConversion = valeurNombre / taux
    }

    console.log(nouvelleConversion)


    // Convertir le nouveau nombre en texte avec 5 digits
    const nouvelleConversionTexte = nouvelleConversion.toFixed(5)

    // Mettre à jour le champ de destination
    // Inverse de l'identifiant: "eur-czk" > "czk-eur"
    
    // Inverse les parties originales de l'identifiants
    const devisesPartiesInversees = devisesParties.reverse()

    console.log(devisesPartiesInversees)

    // Generer l'identifiant de destination à partir des parties
    const identifiantDestination = devisesPartiesInversees.join('-')

    // Récupérer le champs
    const champDestination = document.getElementById(identifiantDestination)
    champDestination.value = nouvelleConversionTexte
  }

  // Récupérer tous les champs texte
  const champs = document.querySelectorAll('input')

  for (const champ of champs) {
    champ.addEventListener('input', changementValeur)
  }
}

chargerPage()
