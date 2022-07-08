// Cette fonction utilitaire n'est pas utile en dehors de ce module, on ne l'inclus donc pas dans
// l'objet exporté, mais on le rend quand même disponible à l'objet exporté.
/*
function getRandomIntInclusive(min, max) {
    const roundedMin = Math.ceil(min);
    const roundedMax = Math.floor(max);
    return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
}
*/
// Si on pense que cette fonction utilitaire peut-être utile à d'autres module ou parties de nos
// application on l'implémentera dans un module d'utiliatires qui pourrait en regouper plusieurs
const { getRandomIntInclusive } = require('../helpers/utils');

function getRandomItem(arr) {
    const index = getRandomIntInclusive(0, arr.length - 1);
    const item = arr[index];
    return item;
}

module.exports = {

    // Dans les bonnes pratiques il est dit que l'on ne doit pas utiliser plus de 3 paramètres dans
    // une function. Pour régler ce problème on peut stocker les informations nécessaires à la
    // function dans un objet. Rien ne nous empêche ensuite de destructurer cet objet, afin de le
    // rendre plus explicite dans le contexte de la function
    generate(
        {
            names, // Array de string
            adjectives,
            verbs,
            complements,
        },
    ) {
        // Le but de cette fonction est donc de générer un phrases qui va utiliser une fois chaque
        // segment de façon aléatoire et dans un ordres précis. <nom> <adjectif> <verb> <complément>

        const randomName = getRandomItem(names);
        const randomAdjective = getRandomItem(adjectives);
        const randomVerb = getRandomItem(verbs);
        const randomComplement = getRandomItem(complements);

        return {
            name: randomName,
            adjective: randomAdjective,
            verb: randomVerb,
            complement: randomComplement,
            // La méthode toString est une méthode native de tout les types de valeurs en JS, de
            // base la méthode toString rattaché à un objet renvoi "[object Object]"

            // Il est possible de surcharger cette méthode lors de la création d'un objet, ce sera
            // celle-ci qui sera utiliser lors d'un cast (transpilation) d'un variable au lieu de la
            // méthode native.
            toString() {
                // Challenge, renvoyer une phrase aléatoire à l'aide des différentes parties de
                // phrase au lieu de truc
                // return 'truc';

                /// comme ceci c'est bien c'est simple, mais si jamais je dois changer le séparateur
                /// entre chaque segment de phrase il faut que je le fasse 3 fois
                // return `${name} ${adjective} ${verb} ${complement}`;
                return [this.name, this.adjective, this.verb, this.complement].join(' ');
            },
        };
    },

};
