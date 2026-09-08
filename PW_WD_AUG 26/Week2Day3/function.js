//Task 1: Function Declaration
//Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
//<name>!" to the console.
//Task 2: Arrow Function
//Create an arrow function named `double` that takes a number as a parameter and returns
//double its value.
//Task 3: Anonymous Function
//Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
//after 2 seconds.
//Task 4: Callback Function
//Create a function named `getUserData` that takes a callback function as a parameter. Inside
//`getUserData`, simulate fetching data with `setTimeout` and then call the callback function
//with a user object after 3 seconds.
//Call the `getUserData` function and log the user's name and age using the callback function




//Function declaration
function userprofile(name) {
    console.log("Hello" + ","+ name + "!");
}

userprofile("Ashwini");

//Arrow function
let double = (num) => {
    return num * 2;
};

console.log(double(5));

//Anonymous function
setTimeout(function() {
    console.log("This message is delayed by 2 seconds");
}, 2000);

//Callback function
function getUserData(callback) {

    setTimeout(function() {

        let user = {
            name: "Ashwini",
            age: 32
        };

        callback(user);

    }, 3000);
}

getUserData(function(user) {
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
});