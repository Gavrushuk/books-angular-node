module.exports.getAllPosts = function () {
  return new Promise((resolve, reject) => {
    this
      .find({})
      .sort('-_id')
      .lean()
      .exec((err, posts) => {
        if (err) {
          return reject(err);
        }
        return resolve(posts);
      });
  });
}

module.exports.getBook = function (id) {
  return new Promise((resolve, reject) => {
    this
      .findOne({
        _id: id
      })
      .lean()
      .exec((err, post) => {
        if (err) {
          return reject(err);
        }
        return resolve(post);
      });
  });
}

module.exports.createBook = function (data) {
  return new Promise((resolve, reject) => {
    this
      .create(data, (err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
  });
}

module.exports.removeBook = function (id) {
  return new Promise((resolve, reject) => {
    this
      .remove({
        _id: id
      })
      .lean()
      .exec((err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
  })
}

module.exports.editBook = function (id, data) {
  return new Promise((resolve, reject) => {
    this
      .update({
        _id: id
      }, { $set: data },
      { upsert: true })
      .lean()
      .exec((err, res) => {
        if (err) {
          return reject(err);
        }
        return resolve(res);
      });
  })
}