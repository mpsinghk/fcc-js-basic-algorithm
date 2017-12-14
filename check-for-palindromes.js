/**
 * Return true if the given string is a palindrome.
 * Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way
 * both forward and backward, ignoring punctuation, case, and spacing.
 * 
 * Note: You'll need to remove all non-alphanumeric characters
 * (punctuation, spaces and symbols) and turn everything lower case
 * in order to check for palindromes.
 * Helpful link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 */

function palindrome(str) {
    // \W is for all non-alphanumeric characters
    // and underscore because it is an alphanum character
    // square bracket is to form a range so regex will pick either \W or _
    var regex = /[\W_]/g;

    return str.replace(regex, "").toLowerCase() === str.replace(regex, "").toLowerCase().split("").reverse().join("");
}

palindrome("eye");
