/**
 * Repeat a given string (first argument) num times (second argument).
 * Return an empty string if num is not a positive number.
 */

// Method 1
function repeatStringNumTimes(str, num) {
    if (num > 0) {
        return str.repeat(num);
    }
    return "";
}

// Method 2
function repeatStringNumTimes(str, num) {
    return (num > 0) ? str.repeat(num) : "";
}

// Method 3
function repeatStringNumTimes(str, num) {
    if (num <= 0) {
        return "";
    } else {
        return str + repeatStringNumTimes(str, num - 1);
    }
}

repeatStringNumTimes("abc", 3);