angular.module('blog-app')
  .filter('categoryParse', function () {
    return function (category) {
      let arrCategory = '';
      arrCategory = category.join();
      return arrCategory;
    }
  });