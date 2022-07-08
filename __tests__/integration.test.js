const request = require('supertest');
const app = require('../app');

describe('GET /cadex', () => {
    it('responds with json', async () => {
        // Lorsque fait une requête avec supertest, on doit lui fournir une application web qui
        // renvoi des données à l'appel d'une requête http Il va se servir de cette application de
        // la même manière que nous nous en servonce dans l'index de notre serveur. Il va fournir a
        // son serveur interne notre application. ce qui va lui permettre de faire des appels HTTP,
        // comme ici lorsque utilise la méthode .get('/cadex).

        const response = await request(app)
            .get('/cadex')
            .set('Accept', 'application/json');

        // Le fait de faire une requête HTTP à travers le module Supertest nous permettra d'utiliser
        // des méthodes de test unitaire chargées de vérifier la réponse à la requête HTTP.
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.status).toEqual(200);
        expect(response.body.cadex).toBeTruthy();
    });
});
