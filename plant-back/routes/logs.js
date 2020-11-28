const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.logs.index);
router.get('/:id', ctrl.logs.show);
router.get('/:id', ctrl.logs.create);
router.get('/:id', ctrl.logs.destroy);

module.exports = router;