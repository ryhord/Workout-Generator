//functions to do calculations for weight

function findWorkingMax(oneRepMax) {
	workingMax = oneRepMax * 0.90;
}

function calcweight1(workingMax) {
	var set1 = workingMax * 0.65;
	var set2 = workingMax * 0.75;
	var set3 = workingMax * 0.85;
}

function calcweight2(workingMax) {
	var set1 = workingMax * 0.70;
	var set2 = workingMax * 0.80;
	var set3 = workingMax * 0.90;
}

function calcweight3(workingMax) {
	var set1 = workingMax * 0.75;
	var set2 = workingMax * 0.85;
	var set3 = workingMax * 0.95;
}

function calcweight4(workingMax) {
	var set1 = workingMax * 0.40;
	var set2 = workingMax * 0.50;
	var set3 = workingMax * 0.60;
}

//vars should be reduced to arrays; .map() to apply working max to them;