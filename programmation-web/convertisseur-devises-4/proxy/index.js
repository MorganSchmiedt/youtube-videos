// Installation avec la commmande "npm install"
// Utilisation avec la commande "node index.js"

const express = require('express')
const server = express()
const port = 8080

const fetch = require('node-fetch')

server.get('/cours', async(req, res) => {
  console.log('Requete entrante')

  // Adresse des taux de la BCE au format XML
  const adresse = 'https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml'

  try {
    const donnees = await fetch(adresse)
      .then(response => {
        console.log(new Date().toJSON() + ':' + response.status)
        if (response.ok === false) {
          return Promise.reject('Erreur dans la récupération des données')
        }

        return response.text()
      })

    res.setHeader('Access-Control-Allow-Origin', req.headers.origin)
    res.status(200).send(donnees)
  } catch(err) {
    res.status(503).send(err)
  }
})

server.listen(port, () => {
  console.log(`Le server est démaré sur le port ${port}`)
})