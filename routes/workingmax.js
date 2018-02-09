var express = require('express');
var router = express.Router();
var calc = require('../calculations');
var app = express();


/* GEt/post the working max */
router.post('/', function(req, res) {
	app.locals.maxes = [req.body.pressMax, req.body.deadMax, req.body.benchMax, req.body.squatMax];

	app.locals.workingMaxes = app.locals.maxes.map(calc.findWorkingMax);

	res.render('workingmax', { 
		pressWorkingMax: app.locals.workingMaxes[0], 
		deadWorkingMax: app.locals.workingMaxes[1], 
		benchWorkingMax: app.locals.workingMaxes[2], 
		squatWorkingMax: app.locals.workingMaxes[3] 
	});
});

router.post('/results', function(req, res) {
	console.log(req.body.months);
	var months = req.body.months;
	//loop calculations based on number of months requested
	//create results object
	//push calculated results into object, in proper key value notation
	var allResults = [week1Results, week2Results, week3Results, week4Results];
	var week1Results = [];
	var week2Results = [];
	var week3Results = [];
	var week4Results = [];
	for(i=0; i < months; i++) {
		
		//Week 1 Results
		//app.locals.week1Weights = app.locals.workingMaxes.map(calc.calcweight1);
		var appropriateNumberMonthValues = app.locals.workingMaxes.map(calc.calcweight1) + (5 * i);

		//Week 2 Results
		app.locals.week2Weights = app.locals.workingMaxes.map(calc.calcweight2);

		//Week 3 Results
		app.locals.week3Weights = app.locals.workingMaxes.map(calc.calcweight3);

		//Week 4 Results
		app.locals.week4Weights = app.locals.workingMaxes.map(calc.calcweight4);

		//maxes + lbs per month iteration
		//use .join(', ') here so calc fuctions are single responsibility
	}
	//Template Render (render an object and its values)
	res.render('results', {
		months: months,
		week1PressWeights: app.locals.week1Weights[0],
		week1DeadWeights: app.locals.week1Weights[1],
		week1BenchWeights: app.locals.week1Weights[2],
		week1SquatWeights: app.locals.week1Weights[3],
		week2PressWeights: app.locals.week2Weights[0],
		week2DeadWeights: app.locals.week2Weights[1],
		week2BenchWeights: app.locals.week2Weights[2],
		week2SquatWeights: app.locals.week2Weights[3],
		week3PressWeights: app.locals.week3Weights[0],
		week3DeadWeights: app.locals.week3Weights[1],
		week3BenchWeights: app.locals.week3Weights[2],
		week3SquatWeights: app.locals.week3Weights[3],
		week4PressWeights: app.locals.week4Weights[0],
		week4DeadWeights: app.locals.week4Weights[1],
		week4BenchWeights: app.locals.week4Weights[2],
		week4SquatWeights: app.locals.week4Weights[3],
	});


});

module.exports = router;