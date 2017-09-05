/**
 * Return true if the given string is a palindrome.
 * Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way
 * both forward and backward, ignoring punctuation, case, and spacing.
 * 
 * Note: You'll need to remove all non-alphanumeric characters
 * (punctuation, spaces and symbols) and turn everything lower case
 * in order to check for palindromes.
 */

function palindrome(str) {

    // \W is for all non-alphanumeric characters
    // plus undersocre because it is a alphanum character
    var regex = /[\W_]/g;

    return str.replace(regex, "").toLowerCase() === str.replace(regex, "").toLowerCase().split("").reverse().join("");
}

palindrome("eye");