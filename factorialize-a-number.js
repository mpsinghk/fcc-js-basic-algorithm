/**
 * Return the factorial of the provided integer. 
 * If the integer is represented with the letter n,
 * a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 *
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * Helpful link: https://www.codecademy.com/courses/javascript-lesson-205/0/1
 */

function factorialize(num) {
    if (num < 0) { // Termination condition - Make sure integer is positive
        return;
    } else if (num === 0) { // Base case - where recusrions stops
        return 1;
    }
    // Recursive case
    return num * factorialize(num - 1);
}

factorialize(5);
