// Récupération de mes models

// Afin de rendre le controller feedCadex plus compéhensible il faudrait ajouter un type de
// documentation particulier, afind de décrire ce que contien l'objet models
const models = require('../models');

// Récupération de mes services
const cadex = require('../services/cadex');

module.exports = {
    /*
    Dans un objet on utilise uniquement les fonctions classique et pas les fonctions fléchées. Car
    les fonctions fléchées n'ont pas de contexte (this) getCadex: function(){

    },
    */
    getCadex(req, res) {
        // La 1ère étape d'un controller est de traiter les informations entrantes autre que la
        // route de baseUrl. Mais ici il n'y a rien a traiter donc on passe à l'étape suivante

        // On veut récupérer ce qui est passé en query string et s'en servir plus tard pour
        // surcharger les segment de phrases retournés dans la réponse
        // console.log(req.query);

        // La 2ème étape est censé récupérer les données qui seront nécessaires à l'application
        // d'une couche ou juste retournées à l'utilisateur
        // On va utiliser les models correspondants
        const names = models.name.findAll();
        const adjectives = models.adjective.findAll();
        const verbs = models.verb.findAll();
        const complements = models.complement.findAll();

        // La 3ème étape va potentiellement appliquer une logique métier en se servant des données /
        // ou pas préalablement récupérées

        // Pour cela on va utiliser notre service "cadex" et sa méthode generate à laquelle on va
        // fournir les données

        // Précision : la méthode generate va avoir besoin de l'ensemble des parties de phrases
        // Vous connaissez surement un moyen d'envoyer des données à une fonction.
        const generatedCadex = cadex.generate({
            names, adjectives, verbs, complements,
        });

        // Ici on peut décider de surcharger le résultat de la génération avec l'information
        // récupéré

        // C'est pas mal, mais c'est pas très DRY
        /*
        if (req.query.name) {
            generatedCadex.name = req.query.name;
        }
        if (req.query.adjective) {
            generatedCadex.adjective = req.query.adjective;
        }
        if (req.query.verb) {
            generatedCadex.verb = req.query.verb;
        }
        if (req.query.complement) {
            generatedCadex.complement = req.query.complement;
        }
        */

        // En fait on peut faire beaucoup simple, sans pour autant ajouter de problème de sécurité.

        // Copie par référence
        // const sameGeneratedCadex = generatedCadex;

        // Clone
        // const clonedGeneratedCadex = { ...generatedCadex };

        // Clone avec ajout de propriété
        // const clonedGeneratedCadex = { ...generatedCadex, test: 1 };
        // const clonedGeneratedCadex = { test: 1, ...generatedCadex };

        // Clone avec surcharge de propriété
        // const clonedGeneratedCadex = { ...generatedCadex, name: 'michel' };
        // Par contre ici on ne peut changer l'ordre comme on veut,
        // c'est la dernière propriété qui aura toujours le dessus
        // const clonedGeneratedCadex = { name: 'michel', ...generatedCadex };

        /// Ici on injecte en plus du cadex aléatoire l'ensemble de propriété du query string et si
        /// jamais une des propréiés du query string s'appelle comme une du cadex généré la valeur
        /// sera surchargé
        const clonedGeneratedCadex = { ...generatedCadex, ...req.query };

        // 4eme on renvoi la réponse à sa demande à l'utilisateur
        res.json({ cadex: `${clonedGeneratedCadex}` });
    },

    feedCadex(req, res) {
        /*
        if (name) {
            models.name.create(name);
        }
        if (adjective) {
            models.adjective.create(adjective);
        }
        if (verb) {
            models.verb.create(verb);
        }
        if (complement) {
            models.complement.create(complement);
        }
        */

        // Version factorisé qui rescpecte les règle de sécurisation car la boucle se base sur les
        // données connues (les models) et non les données fournient par l'utilisateur (req.body)
        // NTUI
        Object.entries(models).forEach(([modelName, model]) => {
            const value = req.body[modelName];
            if (value) {
                model.create(value);
            }
        });

        const names = models.name.findAll();
        const adjectives = models.adjective.findAll();
        const verbs = models.verb.findAll();
        const complements = models.complement.findAll();

        const generatedCadex = cadex.generate({
            names, adjectives, verbs, complements,
        });

        // Au lieu de surchargé avec les query string on surcharge avec le body
        const clonedGeneratedCadex = { ...generatedCadex, ...req.body };

        res.json({ cadex: `${clonedGeneratedCadex}` });
    },

    getNames(_, res) {
        const names = models.name.findAll();
        res.json({ names });
    },
};
