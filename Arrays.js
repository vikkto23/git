function findMax(arr) {
    if (arr.length === 0) {
        return null; // Return null if array is empty
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    if (arr.length === 0) {
        return null; // Return null if array is empty
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}


function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


function filterArray(arr, condition) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (condition(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

const numbers = [5, 8, 1, 10, 3, 6];

console.log("Maximum:", findMax(numbers)); // Output: 10
console.log("Minimum:", findMin(numbers)); // Output: 1
console.log("Sum:", sumArray(numbers));   // Output: 33

// Example of filtering numbers greater than 5
const filteredNumbers = filterArray(numbers, num => num > 5);
console.log("Filtered Numbers:", filteredNumbers); // Output: [8, 10, 6]
