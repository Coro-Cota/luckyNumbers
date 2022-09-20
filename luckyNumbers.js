// Find Lucky Numbers
// Difficulty
// Easy

// Concepts
// Loops, General


// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// returns (3, 7)
// luckyNumbers(6)
// returns (1, 7, 9, 6, 5, 2)



// function getLuckyNumbers(n, max) {
//     const luckyNumbers = [];
//     max = Math.floor(max);
//     while (luckyNumbers.length <= n){
//         let randy = Math.floor(Math.random() * max + 1);
//         if(luckyNumbers.indexof(randy) === -1) luckyNumbers.push(randy)
//   }
//   return luckyNumbers
// }

//   getLuckyNumbers(10,6)

function getLuckyNumbers(n) {
    let luckyNumbers = new Set;
    while (luckyNumbers.size < n) {
        luckyNumbers.add(Math.floor(Math.random() * 10) +1)
    }
    return Array.from(luckyNumbers);
}

console.log(getLuckyNumbers(10))

