// Basics:

// Write a program to find the largest and smallest numbers in an array.
// Example Input: [3, 7, 1, 9, 4]
// Expected Output: Largest: 9, Smallest: 1
// ans

// const arr = [1, 2, 3, 4, 58, 4, 8, 56, 8];
// const largest = Math.max(...arr);
// const smallest = Math.min(...arr);
// console.log(largest, smallest); //output : 58,1

// Advanced Array Methods:

// Use the filter method to find all numbers greater than 5 in an array.
// Example Input: [2, 6, 3, 8, 4, 10]
// Expected Output: [6, 8, 10]
// const numbers = [2, 6, 3, 8, 4, 10];
// const result = numbers.filter(num => num > 5)
// console.log(result);
//
// Iterative Loops:

// Write a program to calculate the sum of all elements in an array using a for...of loop.
// Example Input: [1, 2, 3, 4, 5]
// Expected Output: 15

// const array = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let x of array) {
//     sum += x;
// }
// console.log(sum)
// 2D Arrays:

// Write a function that transposes a 2D array.
// Example Input: [[1, 2], [3, 4], [5, 6]]
// Expected Output: [[1, 3, 5], [2, 4, 6]]

const array = [[1, 2], [3, 4], [5, 6]]


const transposed = (arr) => {

    for (let x in arr) {
        const length = arr[x].length;
        console.log(length)
        for (let i = 0; i < length; i++) {
            const row = [];
            for (let y in arr[x]) {
                row.push(arr[y][i]);
            }
        }
    }
}
transposed(array)