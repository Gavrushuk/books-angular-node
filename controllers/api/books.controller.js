let Post = require('../../models/book.model');

module.exports.getAllBooks = (req, res, next) => {
  Post
    .getAllPosts()
    .then(posts => {
      res.json(posts);
    }, err => next(err));
}

module.exports.getBook = (req, res, next) => {
  Post
    .getBook(req.params.id)
    .then(book => {
      res.json(book);
    }, err => next(err));
}

module.exports.createBook = (req, res, next) => {
  Post
    .createBook(req.body)
    .then(result => res.json(result), err => next(err));
}

module.exports.removeBook = (req, res, next) => {
  Post
    .removeBook(req.params.id)
    .then(book => {
      res.json(book);
    }, err => next(err));
}

module.exports.editBook = (req, res, next) => {
  Post
    .editBook(req.params.id, req.body)
    .then(book => {
      res.json(book);
    }, err => next(err));
}