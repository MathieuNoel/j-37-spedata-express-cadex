// Récupération de mes models
const {
    name,
    adjective,
    verb,
    complement,
} = require('../../models');

// Tout fichier de test doit soit contenir .test dans le nom soit être dans un répertoire nommé,
// "__tests__" soit les 2. Bien sûr cela est configurable dans le fichier de config de Jest

// Tout fichier de tests doit être destiné a un fichiuer en particulier,.
// Ici le but de ce fichier de test est de tester le service "cadex"
// Donc pour le tester il faut l'importer
const cadex = require('../cadex');
// Afin d'implémenter un test et de le décrire on peut utiliser 2 méthodes qui sont des alias
// it()
// test()

// Ce fichier n'est pas directement exécuté par node, il l'est à travers l'executable "jest", cette
// executable va importer les méthodes pour faire des tests et les rendre disponibles à notre script
// de test

// Par contre le linter lui ne le comprend pas, il va faloir lui expliquer. Pour cela direction le
// fichier de configuration ESlint
it(
    // la description du test
    'should have a method generate',
    // UNe fonction de callback qui permettra à Jest d'exécuter le test
    () => {
        // dans la fonction on déclare ce que l'on attends du module testé Ici on veut vérifier que
        // le module contient une méthode donc, une propriété, dont la valeur est de type function
        expect(cadex).toHaveProperty('generate');
    },
);

// Afin de mieux organisé nos test on peut englober plusieurs test dans une catégorie
describe('Method generate', () => {
    it(
        'should be a function',
        () => {
            expect(typeof cadex.generate).toBe('function');
        },
    );
    // On pourrait être tenter d'executer notre méthode avant de faire le test pour vérifier la
    // valeur retour, mais c'est une erreur d'implémentation de test unitaire. Cela va générer une
    // javascript et le test ne pourra pas se terminer dans de bonnes conditions

    // const cadexGenerated = cadex.generate();

    // La méthode describe fonctionne comme un test avec un callback qui va contenir l'ensemble des
    // test rattacher a cette catégorie

    const names = name.findAll();
    const adjectives = adjective.findAll();
    const verbs = verb.findAll();
    const complements = complement.findAll();
    const collections = {
        names,
        adjectives,
        verbs,
        complements,
    };

    it('should return a string when cast as string', () => {
        // On test tout d'abord qu'on recois bien quelque chose
        expect(cadex.generate).toBeTruthy();
        /*
        try {
            if(typeof `${cadex.generate()}` === 'string'){
                // alors c'est bon
            }else{
                //c'est pas bon
            }
        } catch(err) {
            // C'est sur que c'est pas
        }
        */
        expect(typeof `${cadex.generate(collections)}`).toBe('string');
        // Ici je fais que tester si la methode cater en string renvoi bien une string. Mais ce
        // n'est pas suffisant car dans les cas un objet renvoi une string '[object Object]' quand
        // il est caster en string.

        // Je vais donc une attente supplémentaire dans le test courant, afin que celui-ci soit le
        // précis possible et le moins permissif.
        expect(`${cadex.generate(collections)}`).not.toBe('[object Object]');
    });

    it('should return a object', () => {
        expect(typeof cadex.generate(collections)).toBe('object');
    });

    it('should return a string equal to "Mathieu attentif écoute le professeur"', () => {
        expect(`${{
            ...cadex.generate(collections),
            name: 'Mathieu',
            adjective: 'attentif',
            verb: 'écoute',
            complement: 'le professeur',
        }}`).toBe('Mathieu attentif écoute le professeur');
    });
});
