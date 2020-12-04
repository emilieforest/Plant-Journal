const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/graveyard', ctrl.plants.graveyard);
router.get('/', ctrl.plants.index);
router.get('/:id', ctrl.plants.show);
router.post('/', ctrl.plants.create);
router.put('/:id/edit', ctrl.plants.update);
router.delete('/:id', ctrl.plants.destroy);

module.exports = router;