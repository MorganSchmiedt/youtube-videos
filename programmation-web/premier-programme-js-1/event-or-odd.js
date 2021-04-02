function even_or_odd(nombre) {
  // Si nombre est pair
  if (nombre % 2 === 0) {
    // Retourner le mot 'Even'
    return 'Even'
  } else {
    // Sinon (càd impair)
    // Retourner le mot 'Odd'
    return 'Odd'
  }
}

console.log(even_or_odd(2))
console.log(even_or_odd(0))
console.log(even_or_odd(7))
console.log(even_or_odd(1))