var express = require('express');
var router = express.Router();

/* GET application home page. */
router.get('/', function(req, res, next) {
	res.render('index');
});

module.exports = router;
