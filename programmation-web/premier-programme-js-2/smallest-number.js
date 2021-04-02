function smallest(liste) {
  // Variable pour stocker le resultat (Nombre plus petit)
  let plusPetitElement = liste[0] // Premier élément de la liste

  // Boucler à travers la liste de valeurs
  for (const element of liste) {
    // Pour chaque élément de liste
    // Si l'élément est plus petit que le résultat
    if (element < plusPetitElement) {
      // Alors mettre à jour le résultat
      plusPetitElement = element
    } else {
      // Sinon, on passe à l'élement suivant
    }
  }

  // Retourner le plus petit nombre de la liste
  return plusPetitElement
}

// Test en utilisant la fonction ci-dessus
console.log(smallest([1, 10, -5, 0]))

// Résultat identique en utilisant la fonction native de JavaScript
console.log(Math.min(1, 10, -5, 0))

// Test du plus GRAND nombre en utilisant la fonction native de JS
console.log(Math.max(1, 10, -5, 0))