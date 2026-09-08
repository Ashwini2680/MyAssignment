//1. Create an array with numeric values
//2. Declare a variable to store the sum
//3. Use a loop to iterate through the array
//4. Add each element to the sum variable
//5. Print the final sum

let array = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}
console.log(sum);