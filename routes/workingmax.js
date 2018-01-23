var express = require('express');
var router = express.Router();
var calc = require('../calculations');

/* GEt/post the working max */
router.post('/', function(req, res) {
	var weight = {
		oneRepMax : req.body.oneRepMax,
	}

	var workingMax = calc.findWorkingMax(weight.oneRepMax);

	console.log(weight);
	res.render('workingmax', { workingmax: workingMax });
});

module.exports = router;