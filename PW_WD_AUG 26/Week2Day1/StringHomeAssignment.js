//Given a string s consisting of words and spaces, return the length of the last word in the string.
////Example 1:
//Input: s = "Hello World"
//Output: 5
//Explanation: The last word is "World" with length 5.
//Example 2:
//Input: s = " fly me to the moon "
//Output: 4
//Explanation: The last word is "moon" with length 4.
//Example 3:
//Write a function to check if two strings are anagrams.
//Input: isAnagram('listen', 'silent')
//Output: true
//Input: isAnagram('hello', 'world')
////Output: false
//Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.

//Length of the last word

function lengthOfLastWord(s) {
    let words = s.trim().split(" ");
    let lastWord = words[words.length - 1];

    return lastWord.length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" fly me to the moon "));


//function to check if two strings are anagrams of each other
function isAnagram(str1, str2) {
    let first = str1.replaceAll(" ", "").toLowerCase().split("").sort().join("");
    let second = str2.replaceAll(" ", "").toLowerCase().split("").sort().join("");

    return first === second;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));