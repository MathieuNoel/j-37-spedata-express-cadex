const express = require('express');

const router = express.Router();

const controllers = require('../controllers');

router.get('/cadex', controllers.getCadex);

module.exports = router;
