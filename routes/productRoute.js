const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/ctrl.js');

router.get('/', ctrl.getProducts);
router.post('/create', ctrl.addProduct);
router.delete('/:id', ctrl.deleteProduct);
router.put('/:id/update_quantity/', ctrl.updateProduct);

module.exports = router;