const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.user.index);
router.get('/:id', ctrl.user.show);
router.get('/:id', ctrl.user.create);
router.get('/:id', ctrl.user.update);
router.get('/:id', ctrl.user.destroy);

module.exports = router;