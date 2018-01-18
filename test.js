import findWorkingMax from "app";
var chai = require("chai");
var expect = chai.expect;

//tests for the calculate weight functions
describe("findWorkingMax", function(){
	
	it("calculates 90% of a users 1RM", function(){
		expect(findWorkingMax("1000")).to.equal("900");
		expect(findWorkingMax("652")).to.equal("586.8");
	});