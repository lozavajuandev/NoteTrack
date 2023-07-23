const { Router } = require('express');
const { find } = require('../services/porject.services');
const router = Router();

router.get('/', find);

module.exports = router;
