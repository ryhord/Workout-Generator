var express = require('express');
var router = express.Router();
var calc = require('../calculations');
var app = express();

/* GEt/post the working max */
router.post('/', function(req, res) {
	app.locals.maxes = {
		OverheadPress : req.body.pressMax, 
		Deadlift : req.body.deadMax, 
		Bench : req.body.benchMax, 
		Squat : req.body.squatMax,
	};

	app.locals.workingMaxes = {
		OverheadPress : calc.findWorkingMax(req.body.pressMax),
		Deadlift : calc.findWorkingMax(req.body.deadMax), 
		Bench : calc.findWorkingMax(req.body.benchMax), 
		Squat : calc.findWorkingMax(req.body.squatMax),
	}

	res.render('workingmax', { workingMaxes: app.locals.workingMaxes });
});

router.post('/results', function(req, res) {
	console.log(req.body.months);
	var months = req.body.months;
	//loop calculations based on number of months requested
	//create results object
	//push calculated results into object, in proper key value notation

	var monthOfWeights = {
		week1Weights: app.locals.workingMaxes.map(calc.calcweight1),
		week2Weights: app.locals.workingMaxes.map(calc.calcweight2),
		week3Weights: app.locals.workingMaxes.map(calc.calcweight3),
		week4Weights: app.locals.workingMaxes.map(calc.calcweight4),
	}
	
		
	//Week 1 Results
	//app.locals.week1Weights = app.locals.workingMaxes.map(calc.calcweight1);

	//Week 2 Results
	//app.locals.week2Weights = app.locals.workingMaxes.map(calc.calcweight2);

	//Week 3 Results
	//app.locals.week3Weights = app.locals.workingMaxes.map(calc.calcweight3);

	//Week 4 Results
	//app.locals.week4Weights = app.locals.workingMaxes.map(calc.calcweight4);

	//maxes + lbs per month iteration
	//use .join(', ') here so calc fuctions are single responsibility
	//Template Render (render an object and its values)
	res.render('results', {
		months: months,
		monthOfWeights: monthOfWeights,
	});


});

module.exports = router;