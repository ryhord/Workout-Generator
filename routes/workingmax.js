var express = require('express');
var router = express.Router();
var calc = require('../calculations');


/* GEt/post the working max */
router.post('/', function(req, res) {
	var weight = {
		pressMax: req.body.pressMax,
		deadMax: req.body.deadMax,
		benchMax: req.body.benchMax,
		squatMax: req.body.squatMax,
	}

	var pressWorkingMax = calc.findWorkingMax(weight.pressMax);
	var deadWorkingMax = calc.findWorkingMax(weight.deadMax);
	var benchWorkingMax = calc.findWorkingMax(weight.benchMax);
	var squatWorkingMax = calc.findWorkingMax(weight.squatMax);
	console.log(pressWorkingMax);
	console.log(deadWorkingMax);
	console.log(benchWorkingMax);
	console.log(squatWorkingMax);
	res.cookie('pressWorking_Max', pressWorkingMax);
	res.cookie('deadWorking_Max', deadWorkingMax);
	res.cookie('benchWorking_Max', benchWorkingMax);
	res.cookie('squatWorking_Max', squatWorkingMax);
	res.render('workingmax', { pressWorkingMax: pressWorkingMax, deadWorkingMax: deadWorkingMax, benchWorkingMax: benchWorkingMax, squatWorkingMax: squatWorkingMax });
});

router.get('/results', function(req, res) {
	var week1weights = calc.calcweight1(req.cookies.working_max);
	res.render('results', { results: week1weights });
});

module.exports = router;