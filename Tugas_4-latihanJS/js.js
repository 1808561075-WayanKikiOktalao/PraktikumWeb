// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

//     P.S.Each array includes only integer numbers.Output is a number too.

function arrayPlusArray(arr1, arr2) {
    var res = 0;
    for (var i = 0; i < arr1.length; i++) {
        res = res + arr1[i];
    }
    for (var i = 0; i < arr2.length; i++) {
        res = res + arr2[i];
    }
    return res; //something went wrong
}



// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

//     Example:
// past(0, 1, 1) == 61000

function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
}



// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N - 1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

function arr(n) {
    var newArr = [];
    for (var i = 0; i < n; i++) {
        newArr.push(i);
    }
    return newArr;
}



// It's the academic year's end, fateful moment of your school report.The averages must be calculated.All the students come to you and entreat you to 
// calculate their average for them.Easy! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
    var sum = 0;
    for (var i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    }

    var average = sum / marks.length;

    console.log(Math.ceil(average));
    return Math.floor(average);
}



// Write a program that finds the summation of every number from 1 to num.The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given(or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter(Xxxx).

//     Examples:

// hello "john"   => "Hello, John!"
// hello "aliCE"  => "Hello, Alice!"
// hello => "Hello, World!" # name not given
// hello ''       => "Hello, World!" # name is an empty String

function hello(name) {
    if (typeof name === "undefined" || name.length === 0) {
        return `Hello, World!`;
    } else {
        return `Hello, ${name[0].toUpperCase()}${name.substring(1,).toLowerCase()}!`;
    }
}

// Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.

//     invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]
// invert([]) == []
// You can assume that all values are integers.Do not mutate the input array / list.
function invert(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            result.push(arr[i]);
        } else {
            result.push(arr[i] * -1);
        }
    }
    return result;
}

// // Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".

// -If he doesn't get 10 hoops, return the string "Keep at it until you get it".


function hoopCount(n) {

    if (n > 9) {
        return "Great, now move on to tricks";
    }
    else {
        return "Keep at it until you get it";
    }
}

// Write a function named setAlarm which receives two parameters.The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation(because these are the circumstances under which you need to set an alarm).It should return false otherwise.Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

function setAlarm(employed, vacation) {
    if (employed && !vacation) {
        return true;
    } else {
        return false;
    }

}


// Complete the solution so that it reverses all of the words within the string passed in.

//     Example:

// reverseWords("The greatest victory is that which requires no battle")
// should return "battle no requires which that is victory greatest The"

function reverseWords(str) {
    var str2 = str.split(' ');
    balik = str2.reverse();
    gabung = balik.join(' ');
    return gabung;
}



