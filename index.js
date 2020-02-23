// Create a function that takes an array of words and transforms it into an array of each word's length
const wordLengths = arr => arr.map(word => word.length)

// Given an array of drinks, return an array that does not include "cola" or "fanta"
function skipTooMuchSugarDrinks(drinks) {
	return drinks.filter(drink => drink !== "cola" && drink !== "fanta")
}

// Create a function that applies a discount d to every number in the array.
function getDiscounts(nums, d) {
	const discount = "." + d.split("").splice(0,2).join("")
	return nums.map(num => num * Number(discount))
}

// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
function arrayOfMultiples (num, length) {
	let nums = []
	for(let i = 1; i <= length; i++) {
		nums.push(num * i)
	}
	return nums
}

// Write a function that converts an object into an array of keys and values.
function objectToArray(obj) {
	let arr = []
	for(let [key, value] of Object.entries(obj)) {
		arr.push([key, value])
	}
	return arr
}

// Create a function that concatenates n input arrays, where n is variable.
function concat(...args) {
	const arr = []
	return arr.concat(...args)
}