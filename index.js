require('dotenv').config();
const { createServer } = require('http');
// On a modularisé notre application afin de pouvoir l'utiliser ou bon nous semble.

// Prioritairement dans le fichier permettant de lancer le serveur, mais potentiellement dans
// d'autres script.
const app = require('./app');

const port = process.env.PORT || 3000;

// Par contre il faut aller encore un peu loin dans le fait de modularisé, il faut aussi rendre le
// lancement du serveur agnostique (c'est à dire ou le type de technologie n'importe plus).

// Car notre application n'aura pas forcément été developpé à l'aide d'express, ou elle pourait
// migrer un jour vers un autre framework.
/*
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
*/

// On fourni l'application au server web natif

// On fait ce que l'on appelle une injection de dépendance
const server = createServer(app);

server.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
