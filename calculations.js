//functions to do calculations for weight
	function findWorkingMax(oneRepMax) {
		workingMax = oneRepMax * 0.90;
		return workingMax;
	};

	function calcweight1(workingMax) {
		var week1weights = [0.65, 0.75, 0.85];
		week1weights = week1weights.map( x => x * workingMax); //mult workingmax by all values
		week1weights = week1weights.map(function(x){
			return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
		}); // rounds result to the nearest multiple of 5		
		return week1weights.join(', ');
	};

	function calcweight2(workingMax) {
		var week2weights = [0.70, 0.80, 0.90];
		week2weights = week2weights.map( x => x * workingMax); //mult workingmax by all values
		week2weights = week2weights.map(function(x){
			return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
		}); // rounds result to the nearest multiple of 5		
		return week2weights.join(', ');
	};

	function calcweight3(workingMax) {
		var week3weights = [0.75, 0.85, 0.95];
		week3weights = week3weights.map( x => x * workingMax); //mult workingmax by all values
		week3weights = week3weights.map(function(x){
			return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
		}); // rounds result to the nearest multiple of 5		
		return week3weights.join(', ');
	};

	function calcweight4(workingMax) {
		var week4weights = [0.40, 0.50, 0.60];
		week4weights = week4weights.map( x => x * workingMax); //mult workingmax by all values
		week4weights = week4weights.map(function(x){
			return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
		}); // rounds result to the nearest multiple of 5		
		return week4weights.join(', ');
	};

//calcweight functions need to format results to allow only one decimal place
//calcweight functions will likely be refactored to have the array of floats contain user input numbers, both in their value and amount of them;

module.exports = {
	findWorkingMax, 
	calcweight1, 
	calcweight2, 
	calcweight3, 
	calcweight4,
};