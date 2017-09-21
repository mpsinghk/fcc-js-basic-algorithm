/**
 * Return an array consisting of the largest number
 * from each provided sub-array.
 * For simplicity, the provided array will contain exactly 4 sub-arrays.
 * 
 * Remember, you can iterate through an array with a simple for loop,
 * and access each member with array syntax arr[i].
 */

// Method 1 - for loop
function largestOfFour(arr) {
    var largest = [0, 0, 0, 0];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            largest[i] = (arr[i][j] > largest[i]) ? arr[i][j] : largest[i];
        }
    }

    return largest;
}

// Method 2 - Map and Reduce
function largestOfFour(arr) {
    var largest = arr.map(function (subArray) {
        return subArray.reduce(function (preVal, curVal) {
            return Math.max(preVal, curVal);
        });
    });

    return largest;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);
