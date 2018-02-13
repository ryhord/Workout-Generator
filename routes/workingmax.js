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
	var results = {};
	var months = req.body.months;
	for(var currentMonth=1; currentMonth<=months; currentMonth++){
		var maxes = {
			OverheadPress : parseInt(app.locals.maxes.OverheadPress) + (5 * (currentMonth - 1)), 
			Deadlift : parseInt(app.locals.maxes.Deadlift) + (10 * (currentMonth - 1)), 
			Bench : parseInt(app.locals.maxes.Bench) + (5 * (currentMonth - 1)), 
			Squat : parseInt(app.locals.maxes.Squat) + (10 * (currentMonth - 1)),
		}
		console.log("These are the maxes");
		console.log(maxes);

		var workingMaxes = {
			OverheadPress : calc.findWorkingMax(maxes.OverheadPress),
			Deadlift : calc.findWorkingMax(maxes.Deadlift),
			Bench : calc.findWorkingMax(maxes.Bench),
			Squat : calc.findWorkingMax(maxes.Squat),
		}
		console.log('These are the workingmaxes');
		console.log(workingMaxes);

		var monthOfWeights = {
			week1Weights : {
				OverheadPress : calc.calcweight1(workingMaxes.OverheadPress).join(', '),
				Deadlift : calc.calcweight1(workingMaxes.Deadlift).join(', '),
				Bench : calc.calcweight1(workingMaxes.Bench).join(', '),
				Squat : calc.calcweight1(workingMaxes.Squat).join(', '),
			},
			week2Weights: {
				OverheadPress : calc.calcweight2(workingMaxes.OverheadPress).join(', '),
				Deadlift : calc.calcweight2(workingMaxes.Deadlift).join(', '),
				Bench : calc.calcweight2(workingMaxes.Bench).join(', '),
				Squat : calc.calcweight2(workingMaxes.Squat).join(', '),
			},
			week3Weights: {
				OverheadPress : calc.calcweight3(workingMaxes.OverheadPress).join(', '),
				Deadlift : calc.calcweight3(workingMaxes.Deadlift).join(', '),
				Bench : calc.calcweight3(workingMaxes.Bench).join(', '),
				Squat : calc.calcweight3(workingMaxes.Squat).join(', '),
			},
			week4Weights: {
				OverheadPress : calc.calcweight4(workingMaxes.OverheadPress).join(', '),
				Deadlift : calc.calcweight4(workingMaxes.Deadlift).join(', '),
				Bench : calc.calcweight4(workingMaxes.Bench).join(', '),
				Squat : calc.calcweight4(workingMaxes.Squat).join(', '),
			},
		}

		console.log('This is the month of weights');
		console.log(monthOfWeights);
		results[currentMonth] = {};
		results[currentMonth]["weights"] = monthOfWeights;
		console.log(results);
	}
	//maxes + lbs per month iteration
	res.render('results', {
		months: months,
		results: results,
	});


});

module.exports = router;