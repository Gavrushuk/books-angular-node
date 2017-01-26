let router = require('express').Router();
let booksCtrl = require('../../controllers/api/books.controller');

router.get('/', booksCtrl.getAllBooks);
router.get('/:id', booksCtrl.getBook);
router.post('/', booksCtrl.createBook);
router.delete('/:id', booksCtrl.removeBook);
router.put('/:id', booksCtrl.editBook);

module.exports = router;