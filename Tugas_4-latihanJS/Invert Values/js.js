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
document.getElementById("value").innerHTML = invert([1,2,3,4,5]);