//Write a JavaScript function named `isOddOrEven` that takes an integer as input and returns `Odd` if the
//number is odd and `"Even"` if the number is even

function isOddorEven(num) 
{
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
    isOddorEven(12)
    console.log(isOddorEven(12)) // Output: Even