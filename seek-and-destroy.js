/**
 * You will be provided with an initial array
 * (the first argument in the destroyer function),
 * followed by one or more arguments.
 * Remove all elements from the initial array
 * that are of the same value as these arguments.
 */

// Method 1
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] === args[j])
                delete arr[i];
        }
    }

    return arr.filter(function (value) {
        return Boolean(value);
    });
}

// Method 2
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);

    return arr.filter(function (value) {
        for (var i = 0; i < args.length; i++) {
            if (value === args[i])
                return false;
        }
        return true;
    });
}

// Method 3
function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);

    return arr.filter(function (value) {
        if (args.indexOf(value) < 0) {
            return true;
        }
        return false;
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
