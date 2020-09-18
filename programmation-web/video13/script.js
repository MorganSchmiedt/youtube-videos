const DEVISES = {}

const donnees = `
  <gesmes:Envelope>
  <gesmes:subject>Reference rates</gesmes:subject>
  <gesmes:Sender>
  <gesmes:name>European Central Bank</gesmes:name>
  </gesmes:Sender>
  <Cube>
    <Cube time="2020-08-03">
      <Cube currency="USD" rate="1.1726"/>
      <Cube currency="JPY" rate="124.51"/>
      <Cube currency="BGN" rate="1.9558"/>
      <Cube currency="CZK" rate="26.319"/>
      <Cube currency="DKK" rate="7.4466"/>
      <Cube currency="GBP" rate="0.90013"/>
      <Cube currency="HUF" rate="345.72"/>
      <Cube currency="PLN" rate="4.4201"/>
      <Cube currency="RON" rate="4.8355"/>
      <Cube currency="SEK" rate="10.2958"/>
      <Cube currency="CHF" rate="1.0784"/>
      <Cube currency="ISK" rate="160.00"/>
      <Cube currency="NOK" rate="10.7188"/>
      <Cube currency="HRK" rate="7.4755"/>
      <Cube currency="RUB" rate="86.6018"/>
      <Cube currency="TRY" rate="8.1864"/>
      <Cube currency="AUD" rate="1.6508"/>
      <Cube currency="BRL" rate="6.1375"/>
      <Cube currency="CAD" rate="1.5755"/>
      <Cube currency="CNY" rate="8.1900"/>
      <Cube currency="HKD" rate="9.0882"/>
      <Cube currency="IDR" rate="17254.00"/>
      <Cube currency="ILS" rate="4.0056"/>
      <Cube currency="INR" rate="88.1805"/>
      <Cube currency="KRW" rate="1401.26"/>
      <Cube currency="MXN" rate="26.2690"/>
      <Cube currency="MYR" rate="4.9501"/>
      <Cube currency="NZD" rate="1.7701"/>
      <Cube currency="PHP" rate="57.579"/>
      <Cube currency="SGD" rate="1.6147"/>
      <Cube currency="THB" rate="36.644"/>
      <Cube currency="ZAR" rate="20.2777"/>
    </Cube>
  </Cube>
  </gesmes:Envelope>
`

const chargerDonnees = () => {
  // Extraire les données contenues dans les balises
  // <Cube></Cube>
  const BALISE_CUBE = '<Cube>'
  const positionDebut = donnees.indexOf(BALISE_CUBE)

  // console.log(positionDebut)

  const BALISE_CUBE_FIN = '</Cube>'
  const positionFin = donnees.lastIndexOf(BALISE_CUBE_FIN)

  // console.log(positionFin)

  const TAILLE_BALISE_CUBE_FIN = BALISE_CUBE_FIN.length

  const donneesXML = donnees.substring(positionDebut, 
    positionFin + TAILLE_BALISE_CUBE_FIN)

  // console.log(donneesXML)

  // Manipuler les données XML

  // Créer un DOMParser
  const parser = new DOMParser()

  const mimeTypeXML = 'text/xml'

  // Convertir un texte XML en DocumentXML
  const documentXML = parser.parseFromString(donneesXML, mimeTypeXML)

  console.log(documentXML)

  // Parcourir notre document XML
  // Récupérer la premiere balise Cube
  const cube1 = documentXML.firstElementChild

  console.log(cube1)

  // Récupérer la 2eme Cube intégrée à la premiere
  const cube2 = cube1.firstElementChild

  console.log(cube2)
  console.log(cube2.attributes)

  // Récupréer les attributs
  const cubeAttributs = cube2.attributes
  
  // Récupérer l'attribute time
  const attrTime = cubeAttributs.getNamedItem('time')

  console.log(attrTime)

  const time = attrTime.value

  console.log(time)

  // Affiche la date à l'écran
  const timeElement = document.getElementById('time')
  timeElement.textContent = `Date des cours: ${time}`

  // Parcourir le cube2, et récupérer tous les éléments (cube)
  const elements = cube2.children

  console.log(elements)

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

  console.log(DEVISES)
}

chargerDonnees()



// Récupérer les deux champs
const eurgbpInput = document.getElementById('input-eurgbp')
const gbpeurInput = document.getElementById('input-gbpeur')

// Initialiser le taux affiche a l'écran
gbpeurInput.value = DEVISES.gbp.toFixed(5)

// Associer un événement qui correspond au changement
// de la valeur du champs
eurgbpInput.addEventListener('input', () => {
  // Récupérer la valeur saisi par l'utilisateur
  const eur = eurgbpInput.value

  // Convertir la valeur en nombre
  const eurNombre = parseFloat(eur)

  // Calculer la nouvelle conversion
  const nouvelleConversion = eurNombre * DEVISES.gbp
  
  console.log(nouvelleConversion)

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5)

  console.log(nouvelleConversionTexte)

  // Mettre à jour le champ
  gbpeurInput.value = nouvelleConversionTexte
})

gbpeurInput.addEventListener('input', () => {
  // Récupérer la valeur saisi par l'utilisateur
  const gbp = gbpeurInput.value

  // Convertir la valeur en nombre
  const gbpNombre = parseFloat(gbp)

  // Calculer la nouvelle conversion
  const nouvelleConversion = gbpNombre / DEVISES.gbp

  console.log(nouvelleConversion)

  // Convertir le nouveau nombre en texte avec 5 digits
  const nouvelleConversionTexte = nouvelleConversion.toFixed(5)

  console.log(nouvelleConversionTexte)

  // Mettre à jour le champ
  eurgbpInput.value = nouvelleConversionTexte
})