const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer.js');

describe('fizzBuzzer', function() {

	// test if arg is a number
	it('should send error if arg is not a number', function() {
		const badInputs = [
			['a'],
			['4'],
			[true]
		];
		badInputs.forEach(function(input) {
			expect(function() {
				fizzBuzzer(input.num);
			}).to.throw(Error);
		});
	});

	// test if statement (num % 15  === 0)
	it('should return fizz-buzz if multiple of 15', function() {
		const normalCases = [
			{num: 30, expected: 'fizz-buzz'},
			{num: 150, expected: 'fizz-buzz'}, 
			{num: 15, expected: 'fizz-buzz'}
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

	// test if statement (num % 5  === 0)
	it('should return buzz if multiple of 5', function() {
		normalCases = [
			{num: 25, expected: 'buzz'},
			{num: 65, expected: 'buzz'},
			{num: 5, expected: 'buzz'}
		];


		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});	

	// test if statement (num % 3  === 0)
	it('should return fizz if multiple of 3', function() {
		normalCases = [
			{num: 33, expected: 'fizz'},
			{num: 9, expected: 'fizz'},
			{num: 18, expected: 'fizz'}
		];


		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});	

	// test else statement (return num)
	it('should return argument as number if not a multiple of 15, 5 or 3', function() {
		normalCases = [
			{num: 7, expected: 7},
			{num: 34, expected: 34},
			{num: 13, expected: 13} 
		];

		normalCases.forEach(function(input) {
			const answer = fizzBuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});
	});

});