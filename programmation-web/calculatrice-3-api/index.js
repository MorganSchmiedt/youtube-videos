'use strict'
/* eslint-env node */
/* eslint-disable no-console */

// Importer le paquet express
const express = require('express')

// Cree une application express
const app = express()

// Crée une route pour la page d'accueil '/'
app.get('/', (req, res) => {
  // Chemin à personnaliser !!!
  res.sendFile('c:/api/index.html')
})

// Créé route pour calculter le total d'une addition
// Route : /api/addition?termes=5.5,2,3
app.get('/api/addition', (req, res) => {
  // Récupère les paramètres de l'adresse
  const parametres = req.query
  // Récupère le paramètre 'termes'
  const termes = parametres.termes

  if (termes == null) {
    res.sendStatus(400)
    return
  }

  const total = termes
    // Découpe le texte selon le délimitateur ','
    .split(',')
    // Convertie chaque élément du tableau en nombre
    .map(element => Number.parseFloat(element))
    // Retire les éléments qui ne sont pas nombres
    .filter(element => Number.isNaN(element) === false)
    // Additione tous les éléments
    .reduce((element, acc) => acc + element, 0)

  const totalTexte = total.toString()

  res.send(totalTexte)
})

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

// Créer une route POST /api/addition
// Le contenu de la requête est au format :
// { terms: [1, 2, 3, ...] }
app.post('/api/addition',
  jsonParser,
  (req, res) => {
    // Récupère le contenu de la requête
    const contenu = req.body
    // Récupère le paramètre 'termes'
    const termes = contenu.termes

    if (termes == null) {
      res.sendStatus(400)
      return
    }

    const total = termes
      // Convertie chaque élément du tableau en nombre
      .map(element => Number.parseFloat(element))
      // Retire les éléments qui ne sont pas nombres
      .filter(element => Number.isNaN(element) === false)
      // Additione tous les éléments
      .reduce((element, acc) => acc + element, 0)

    res.send({ resultat: total })
  })

const PORT = 5400

app.listen(PORT, () => {
  console.log(`Application démarre à l\'adresse http://localhost:${PORT}`)
})
