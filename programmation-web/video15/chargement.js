// Adresse du proxy
const adresse = 'http://localhost:8080/cours'

export default async() => {
  const donnees = await fetch(adresse)
    .then(response => {
      if (response.ok === false) {
        return Promise.reject('Erreur dans la récupération des données')
      }

      return response.text()
    })

  console.log(donnees)

  const DEVISES = {}

  // Extraire les données contenues dans les balises
  // <Cube></Cube>
  const BALISE_CUBE = '<Cube>'
  const positionDebut = donnees.indexOf(BALISE_CUBE)

  const BALISE_CUBE_FIN = '</Cube>'
  const positionFin = donnees.lastIndexOf(BALISE_CUBE_FIN)

  const TAILLE_BALISE_CUBE_FIN = BALISE_CUBE_FIN.length

  const donneesXML = donnees.substring(positionDebut, 
    positionFin + TAILLE_BALISE_CUBE_FIN)

  // Manipuler les données XML

  // Créer un DOMParser
  const parser = new DOMParser()

  const mimeTypeXML = 'text/xml'

  // Convertir un texte XML en DocumentXML
  const documentXML = parser.parseFromString(donneesXML, mimeTypeXML)

  // Parcourir notre document XML
  // Récupérer la premiere balise Cube
  const cube1 = documentXML.firstElementChild

  // Récupérer la 2eme Cube intégrée à la premiere
  const cube2 = cube1.firstElementChild

  // Récupréer les attributs
  const cubeAttributs = cube2.attributes
  
  // Récupérer l'attribute time
  const attrTime = cubeAttributs.getNamedItem('time')
  const time = attrTime.value

  // Affiche la date à l'écran
  const timeElement = document.getElementById('time')
  timeElement.textContent = `Date des cours: ${time}`

  // Parcourir le cube2, et récupérer tous les éléments (cube)
  const elements = cube2.children

  // Pour chaque élément
  for (const element of elements) {
    // Récupérer l'attribut currency et rate
    const attributs = element.attributes
    const currencyText = attributs.getNamedItem('currency').value
    const rateText = attributs.getNamedItem('rate').value

    const monnaie = currencyText.toLowerCase()
    const taux = parseFloat(rateText)

    // Ajouter les monnaies à l'objet global
    DEVISES[monnaie] = taux
  }

  return DEVISES
}