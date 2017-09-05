/**
 * Return the length of the longest word in the provided sentence.
 * Your response should be a number.
 */

function findLongestWord(str) {
    // Split the string into array of words.
    var words = str.split(" ");

    // Reduce method will compare the length of preVal and curVal
    // and return the longest of both.
    var longest = words.reduce(function (preVal, CurVal) {
        return Math.max(preVal, CurVal.length);
    }, 0);

    return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");