function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function fibonacci(n) {
    let fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
    }
    return fibSeq;
}

console.log("Factorial of 5:", factorial(5)); // Output: 120

console.log("Is 7 prime?", isPrime(7)); // Output: true
console.log("Is 10 prime?", isPrime(10)); // Output: false

console.log("Fibonacci sequence up to 10 terms:", fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
