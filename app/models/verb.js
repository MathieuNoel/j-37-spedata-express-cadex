const sentenceParts = require('../../data/parts.json');

module.exports = {

    findAll() {
        return sentenceParts.verbs;
    },

    create(verb) {
        sentenceParts.verbs.push(verb);
        return verb;
    },

};
