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