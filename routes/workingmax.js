var express = require('express');
var router = express.Router();
var calc = require('../calculations');
var app = express();


/* GEt/post the working max */
router.post('/', function(req, res) {

	app.locals.pressMax = req.body.pressMax;
	app.locals.deadMax = req.body.deadMax;
	app.locals.benchMax = req.body.benchMax;
	app.locals.squatMax = req.body.squatMax;

	var weight = {
		pressMax: app.locals.pressMax,
		deadMax: app.locals.deadMax,
		benchMax: app.locals.benchMax,
		squatMax: app.locals.squatMax,
	}

	app.locals.pressWorkingMax = calc.findWorkingMax(weight.pressMax);
	app.locals.deadWorkingMax = calc.findWorkingMax(weight.deadMax);
	app.locals.benchWorkingMax = calc.findWorkingMax(weight.benchMax);
	app.locals.squatWorkingMax = calc.findWorkingMax(weight.squatMax);

	res.render('workingmax', { 
		pressWorkingMax: app.locals.pressWorkingMax, 
		deadWorkingMax: app.locals.deadWorkingMax, 
		benchWorkingMax: app.locals.benchWorkingMax, 
		squatWorkingMax: app.locals.squatWorkingMax 
	});
});

router.get('/results', function(req, res) {
	//Week 1 Results (possibly reduced to arrays, calc function mapped)
	var week1PressWeights = calc.calcweight1(app.locals.pressWorkingMax);
	var week1DeadWeights = calc.calcweight1(app.locals.deadWorkingMax);
	var week1BenchWeights = calc.calcweight1(app.locals.benchWorkingMax);
	var week1SquatWeights = calc.calcweight1(app.locals.squatWorkingMax);

	//Week 2 Results
	var week2PressWeights = calc.calcweight2(app.locals.pressWorkingMax);
	var week2DeadWeights = calc.calcweight2(app.locals.deadWorkingMax);
	var week2BenchWeights = calc.calcweight2(app.locals.benchWorkingMax);
	var week2SquatWeights = calc.calcweight2(app.locals.squatWorkingMax);
	
	//Week 3 Results
	var week3PressWeights = calc.calcweight3(app.locals.pressWorkingMax);
	var week3DeadWeights = calc.calcweight3(app.locals.deadWorkingMax);
	var week3BenchWeights = calc.calcweight3(app.locals.benchWorkingMax);
	var week3SquatWeights = calc.calcweight3(app.locals.squatWorkingMax);
	
	//Week 4 Results
	var week4PressWeights = calc.calcweight4(app.locals.pressWorkingMax);
	var week4DeadWeights = calc.calcweight4(app.locals.deadWorkingMax);
	var week4BenchWeights = calc.calcweight4(app.locals.benchWorkingMax);
	var week4SquatWeights = calc.calcweight4(app.locals.squatWorkingMax);

	//Template Render (need to be easier way, and to load results dynamically based on number of months wanted)
	res.render('results', { 
		week1PressWeights: week1PressWeights,
		week1DeadWeights: week1DeadWeights,
		week1BenchWeights: week1BenchWeights,
		week1SquatWeights: week1SquatWeights,
		week2PressWeights: week2PressWeights,
		week2DeadWeights: week2DeadWeights,
		week2BenchWeights: week2BenchWeights,
		week2SquatWeights: week2SquatWeights,
		week3PressWeights: week3PressWeights,
		week3DeadWeights: week3DeadWeights,
		week3BenchWeights: week3BenchWeights,
		week3SquatWeights: week3SquatWeights,
		week4PressWeights: week4PressWeights,
		week4DeadWeights: week4DeadWeights,
		week4BenchWeights: week4BenchWeights,
		week4SquatWeights: week4SquatWeights,
	});


});

module.exports = router;