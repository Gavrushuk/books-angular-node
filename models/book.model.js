let mongoose = require('mongoose');
let statics = require('./statics/book.statics');

let bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: [String]
});

bookSchema.statics.getAllPosts = statics.getAllPosts;
bookSchema.statics.getBook = statics.getBook;
bookSchema.statics.createBook = statics.createBook;
bookSchema.statics.removeBook = statics.removeBook;
bookSchema.statics.editBook = statics.editBook;

module.exports = mongoose.model('Book', bookSchema);