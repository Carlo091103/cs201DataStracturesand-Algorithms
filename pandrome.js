// Get user input using prompt()
let word1 = prompt("Enter the first word (e.g., RACECAR):");
let word2 = prompt("Enter the second word (e.g., RECORDER):");

// Function to check if a string is a palindrome
function isPalindrome(word) {
    let reversed = word.split('').reverse().join('');
    console.log(Original: ${word}, Reversed: ${reversed});
    return word === reversed;
}

// Log results for word1
console.log(Is "${word1}" a palindrome? ${isPalindrome(word1)});

// Log results for word2
console.log(Is "${word2}" a palindrome? ${isPalindrome(word2)});
