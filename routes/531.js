var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('531');
});

module.exports = router;