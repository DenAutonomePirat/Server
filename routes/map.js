var express = require('express');
var router = express.Router();

/* serve map */
router.get('/', function(req, res, next) {
  res.render('masp', { title: 'Express' });
});

module.exports = router;