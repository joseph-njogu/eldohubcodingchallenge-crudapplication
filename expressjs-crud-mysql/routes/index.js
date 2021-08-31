var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.jade', { title: 'Hot Movies page' });
});

module.exports = router;
