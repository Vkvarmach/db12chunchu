var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Rabbit', { title: 'Search Results by Rabbit' });
});

module.exports = router;