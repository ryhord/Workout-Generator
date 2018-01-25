var express = require('express');
var router = express.Router();
var calc = require('../calculations');


/* GEt/post the working max */
router.post('/', function(req, res) {
	var weight = {
		oneRepMax: req.body.oneRepMax,
	}

	var workingMax = calc.findWorkingMax(weight.oneRepMax);

	console.log(workingMax);
	res.cookie('working_max', workingMax);
	res.render('workingmax', { workingmax: workingMax });
});

router.get('/results', function(req, res) {
	var week1weights = calc.calcweight1(req.cookies.working_max);
	res.render('results', { results: week1weights });
});

module.exports = router;