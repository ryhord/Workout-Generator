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
	res.cookie('press_working_max', pressWorkingMax);
	res.cookie('dead_working_max', deadWorkingMax);
	res.cookie('bench_working_max', benchWorkingMax);
	res.cookie('squat_working_max', squatWorkingMax);
	res.render('workingmax', { 
		pressWorkingMax: pressWorkingMax, 
		deadWorkingMax: deadWorkingMax, 
		benchWorkingMax: benchWorkingMax, 
		squatWorkingMax: squatWorkingMax 
	});
});

router.get('/results', function(req, res) {
	//Week 1 Results
	var week1PressWeights = calc.calcweight1(req.cookies.press_working_max);
	var week1DeadWeights = calc.calcweight1(req.cookies.dead_working_max);
	var week1BenchWeights = calc.calcweight1(req.cookies.bench_working_max);
	var week1SquatWeights = calc.calcweight1(req.cookies.squat_working_max);

	//Week 2 Results
	var week2PressWeights = calc.calcweight2(req.cookies.press_working_max);
	var week2DeadWeights = calc.calcweight2(req.cookies.dead_working_max);
	var week2BenchWeights = calc.calcweight2(req.cookies.bench_working_max);
	var week2SquatWeights = calc.calcweight2(req.cookies.squat_working_max);
	
	//Week 3 Results
	var week3PressWeights = calc.calcweight3(req.cookies.press_working_max);
	var week3DeadWeights = calc.calcweight3(req.cookies.dead_working_max);
	var week3BenchWeights = calc.calcweight3(req.cookies.bench_working_max);
	var week3SquatWeights = calc.calcweight3(req.cookies.squat_working_max);
	
	//Week 4 Results
	var week4PressWeights = calc.calcweight4(req.cookies.press_working_max);
	var week4DeadWeights = calc.calcweight4(req.cookies.dead_working_max);
	var week4BenchWeights = calc.calcweight4(req.cookies.bench_working_max);
	var week4SquatWeights = calc.calcweight4(req.cookies.squat_working_max);

	//Template Render
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