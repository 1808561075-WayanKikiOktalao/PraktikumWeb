// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

//     Example:
// past(0, 1, 1) == 61000

function past(h, m, s) {
    return h * 3600000 + m * 60000 + s * 1000;
}

document.getElementById("value").innerHTML = past(0, 1, 1);