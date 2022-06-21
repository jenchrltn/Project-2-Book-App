const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/booksController');

router.get('/book/new', booksCtrl.index);
router.get('/book/:id', booksCtrl.show);
router.post('/book', booksCtrl.create);
router.put('/book/:id', booksCtrl.update)
router.delete('/book/:id',booksCtrl.deleteCtrl)

module.exports = router; 


