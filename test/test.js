var app = require("../calculations.js");
var chai = require("chai");
var expect = chai.expect;

describe("calulations", function(){
	
	describe("findworkingMax", function(){
		it("calculates 90% of a users 1RM", function() {
			expect(app.findWorkingMax(1000)).to.equal(900);
			expect(app.findWorkingMax(150)).to.equal(135);
		})
		it("returns a number", function() {
			expect(app.findWorkingMax(1000)).to.be.a('number');
		})
	})
	
	describe("calcweight1", function() {
		it("gives results which are 65%, 75% and 85% of the argument given", function() {
			expect(app.calcweight1(100)).to.equal("65, 75, 85");
		})
		it("returns a string", function() {
			expect(app.calcweight1(100)).to.be.a('string');
		})
	})

	describe("calcweight2", function() {
		it("gives results which are 70%, 80% and 90% of the argument given", function() {
			expect(app.calcweight2(100)).to.equal("70, 80, 90");
		})
		it("returns a string", function() {
			expect(app.calcweight2(100)).to.be.a('string');
		})
	})

	describe("calcweight3", function() {
		it("gives results which are 75%, 85% and 95% of the argument given", function() {
			expect(app.calcweight3(100)).to.equal("75, 85, 95");
		})
		it("returns a string", function() {
			expect(app.calcweight3(100)).to.be.a('string');
		})
	})

	describe("calcweight4", function() {
		it("gives results which are 40%, 50% and 60% of the argument given", function() {
			expect(app.calcweight4(100)).to.equal("40, 50, 60");
		})
		it("returns a string", function() {
			expect(app.calcweight4(100)).to.be.a('string');
		})
	})

});
