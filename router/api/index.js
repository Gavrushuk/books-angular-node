let router = require('express').Router();
let booksRoutes = require('./books.routes');

router.use('/books', booksRoutes);

module.exports = router;