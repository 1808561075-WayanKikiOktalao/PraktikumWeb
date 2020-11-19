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

document.getElementById("value").innerHTML = getAverage([2,2,2,2]);