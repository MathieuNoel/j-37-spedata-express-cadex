const sentenceParts = require('../../data/parts.json');

module.exports = {

    findAll() {
        return sentenceParts.complements;
    },

    create(complement) {
        sentenceParts.complements.push(complement);
        return complement;
    },

};
