/**
 * Return true if the string in the first element
 * of the array contains all of the letters
 * of the string in the second element of the array.
 * 
 * For example, ["hello", "Hello"], should return
 * true because all of the letters in the second string
 * are present in the first, ignoring case.
 * 
 * The arguments ["hello", "hey"] should return false
 * because the string "hello" does not contain a "y".
 * 
 * Lastly, ["Alien", "line"], should return true
 * because all of the letters in "line" are present in "Alien".
 */

// Method 1
function mutation(arr) {

    var searchIn = arr[0].toLowerCase();
    var searchMe = arr[1].toLowerCase();

    for (var i = 0; i < searchMe.length; i++) {
        if (searchIn.indexOf(searchMe[i]) === -1) {
            return false;
        }
    }
    return true;
}

// Method 2
function mutation(arr) {

    var searchIn = arr[0].toLowerCase();
    var searchMe = arr[1].toLowerCase().split("");

    return searchMe.every(function (letter) {
        if (searchIn.indexOf(letter) === -1) {
            return false;
        }
        return true;
    });
}

// Method 3
function mutation(arr) {

    var searchIn = arr[0].toLowerCase();
    var searchMe = arr[1].toLowerCase().split("");
    var result = true;

    searchMe.map(function (letter) {
        if (searchIn.indexOf(letter) === -1) {
            result = false;
        }
    });

    return result;
}

mutation(["hello", "hey"]);