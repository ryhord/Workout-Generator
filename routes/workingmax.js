var express = require('express');
var router = express.Router();

/* GEt/post the working max */
router.get('/', function(req, res) {
	res.render('workingmax');
});

module.exports = router;