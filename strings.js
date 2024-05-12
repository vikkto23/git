// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Testing the functions
console.log(reverseString("hello")); // Output: "olleh"
console.log(countCharacters("hello")); // Output: 5
console.log(capitalizeWords("hello world")); // Output: "Hello World"
