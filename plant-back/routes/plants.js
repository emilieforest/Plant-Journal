const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.plants.index);
router.get('/:id', ctrl.plants.show);
router.post('/', ctrl.plants.create);
router.put('/:id', ctrl.plants.update);
router.delete('/:id', ctrl.plants.destroy);
router.get('/graveyard/:id', ctrl.plants.graveyard);

module.exports = router;