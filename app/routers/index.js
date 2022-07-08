const express = require('express');

const router = express.Router();

const controllers = require('../controllers');

/*
router.get('/cadex', controllers.getCadex);
router.post('/cadex', controllers.addCadex);
*/
// Méthode d'implémentation "factorisé"
router.route('/cadex')
    .get(controllers.getCadex)
    .post(controllers.feedCadex);

router.get('/names', controllers.getNames);

module.exports = router;
