var express = require('express');
var router = express.Router();

/* GEt/post the working max */
router.post('/', function(req, res) {
	var weight = {
		oneRepMax : req.body.oneRepMax,
	}
	console.log(weight);
	res.render('workingmax', { workingmax: weight.oneRepMax });
});

module.exports = router;