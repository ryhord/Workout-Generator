//functions to do calculations for weight

function findWorkingMax(oneRepMax) {
	workingMax = oneRepMax * 0.90;
}

function calcweight1(workingMax) {
	var week1weights = [0.65, 0.75, 0.85];
	return week2weights.map( x => x * workingMax);
}

function calcweight2(workingMax) {
	var week2weights = [0.70, 0.80, 0.90];
	return week1weights.map( x => x * workingMax);
}

function calcweight3(workingMax) {
	var week3weights = [0.75, 0.85, 0.95];
	return week1weights.map( x => x * workingMax);
}

function calcweight4(workingMax) {
	var week4weights = [0.40, 0.50, 0.60];
	return week1weights.map( x => x * workingMax);
}

export findWorkingMax