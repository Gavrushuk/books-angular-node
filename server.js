let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let routes = require('./router');
let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/books', err => {
  if (err) {
    console.error(err);
  }
  console.log('Connected to DB');
})

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/assets'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use(routes);

app.use((req, res) => {
  res.render('index');
});

app.listen(8080);
console.log('Server is complit on port 8080');