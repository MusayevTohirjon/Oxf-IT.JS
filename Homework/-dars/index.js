// 1 savol javoblari
function solution(str) {
  return str.split("").reverse().join("");
}

// 2  savol javoblari

function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

// 3  savol javoblari

function positiveSum(arr) {
  return arr.filter((n) => n > 0).reduce((a, b) => a + b, 0);
}

// 3  savol javoblari

function booleanToString(b) {
  return b ? "true" : "false";
}
