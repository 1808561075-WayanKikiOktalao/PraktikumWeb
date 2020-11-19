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

document.getElementById("value").innerHTML = arrayPlusArray([1, 2, 3], [4, 5, 6]);