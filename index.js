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

// Write a function that takes a string and returns an object stating how many of each characters are in that string. String: "code challenges" output: {c: 2, o: 1, d: 1, e: 3, h: 1, a:1, l: 2, n: 1, g: 1, s: 1}
function str2Obj(str) {
	const obj = {}
	for(let i = 0; i < str.length; i++) {
		let char = str.charAt(i)
		if(obj[char]) {
			obj[char] ++
		} else if(char == " ") {
			!obj[char]
		} else {
			obj[char] = 1
		}
	}
	console.log(obj)
}

// Given an array of strings and a string, write a function that counts how many instances of that string are in the array
const countStrings = (arr, str) => {
	let count = 0
	for(let i = 0; i < arr.length; i++) {
		arr[i] === str ? count ++ : count 
	}
	console.log(count)
}

// Write a function that takes an unsorted array as a parameter, and returns the missing number.
function findMissingNumber(arr) {
	const sortedArr = arr.sort((a, b) => a - b)
	for(let i = 1; i < sortedArr.length; i++) {
		if(sortedArr[i] - sortedArr[i - 1] === 2) {
			return sortedArr[i] - 1
		}
	}
}