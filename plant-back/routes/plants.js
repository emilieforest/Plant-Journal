const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.plants.index);
router.get('/:id', ctrl.plants.show);
router.get('/:id', ctrl.plants.create);
router.get('/:id', ctrl.plants.destroy);

module.exports = router;