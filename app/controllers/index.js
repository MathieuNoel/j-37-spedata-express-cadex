// Récupération de mes models
const {
    name,
    adjective,
    verb,
    complement,
} = require('../models');

// Récupération de mes services
const cadex = require('../services/cadex');

module.exports = {
    /*
    Dans un objet on utilise uniquement les fonctions classique et pas les fonctions fléchées. Car
    les fonctions fléchées n'ont pas de contexte (this) getCadex: function(){

    },
    */
    getCadex(_, res) {
        // La 1ère étape d'un controller est de traiter les informations entrantes autre que la
        // route de baseUrl. Mais ici il n'y a rien a traiter donc on passe à l'étape suivante

        // La 2ème étape est censé récupérer les données qui seront nécessaires à l'application
        // d'une couche ou juste retournées à l'utilisateur
        // On va utiliser les models correspondants
        const names = name.findAll();
        const adjectives = adjective.findAll();
        const verbs = verb.findAll();
        const complements = complement.findAll();

        // La 3ème étape va potentiellement appliquer une logique métier en se servant des données /
        // ou pas préalablement récupérées

        // Pour cela on va utiliser notre service "cadex" et sa méthode generate à laquelle on va
        // fournir les données

        // Précision : la methode generate va avoir besoin de l'ensemble des parties de phrases
        // disponible. Vous connaissez surement un moyen d'envoyer des données a une fonction.

        res.json({});
    },
};
