function sum(liste) {
  // Endroit pour stocker la somme
  // Somme égal à 0
  let somme = 0

  // Chaque élément de la liste
  // Prendre l'élément et l'ajouter à la somme
  for (const element of liste) {
    // Faire quelque chose
    somme = somme + element
  }

  // Retourner somme
  return somme
}

function moyenne(liste) {
  // Somme de tous les éléments de la liste
  const somme = sum(liste)

  // Nombre d'éléments de la liste
  const nombreElements = liste.length
  
  // Retourner: Somme / Nombre d'éléments
  return somme / nombreElements
}

console.log(moyenne([1, 2, 3]))
console.log(moyenne([]))
console.log(moyenne([10, 15, 20]))