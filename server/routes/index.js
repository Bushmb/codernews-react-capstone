var express = require('express');
var router = express.Router();
var path = require('path')

router.get('*', function(req, res, next) {
  const index = path.join(__dirname, '../../client/build', 'index.html');
  res.sendFile(index);
});

module.exports = router;
