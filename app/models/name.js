const sentenceParts = require('../../data/parts.json');

module.exports = {

    findAll() {
        return sentenceParts.names;
    },

    create(name) {
        sentenceParts.names.push(name);
        return name;
    },

};
