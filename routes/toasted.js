var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('toasted', { title: 'Search Results toasted' });
});

module.exports = router;
