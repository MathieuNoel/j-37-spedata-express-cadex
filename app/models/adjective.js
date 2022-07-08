const sentenceParts = require('../../data/parts.json');

module.exports = {

    findAll() {
        return sentenceParts.adjectives;
    },

    create(adjective) {
        sentenceParts.adjectives.push(adjective);
        return adjective;
    },

};
