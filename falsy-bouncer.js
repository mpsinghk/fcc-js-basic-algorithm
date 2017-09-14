/**
 * Remove all falsy values from an array.
 * 
 * Falsy values in JavaScript are
 * false, null, 0, "", undefined, and NaN.
 */

// Method 1
function bouncer(arr) {
    var filtered = arr.filter(function (value) {
        if (value)
            return value;
    });

    return filtered;
}

// Method 2
function bouncer(arr) {
    return arr.filter(function (value) {
        return Boolean(value);
    });
}

// Method 3
function bouncer(arr) {
    return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);