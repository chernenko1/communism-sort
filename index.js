function findAverageMatch(arr) {
  var sum = arr.reduce((acc, val) => acc + val, 0);
  var avg = sum / arr.length;

  if (arr.includes(avg)) {
    return avg;
  }

  var closest = arr[0];
  var minDiff = Math.abs(avg - arr[0]);

  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(avg - arr[i]);
    if (diff < minDiff) {
      minDiff = diff;
      closest = arr[i];
    }
  }

  return closest;
}

function communismSort(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Expected an array");
  }

  if (numbers.length === 0) {
    throw new Error("Array should not be empty");
  }

  if (!numbers.every((item) => typeof item === "number")) {
    throw new TypeError("Array should contain only numbers");
  }

  var averageNum = findAverageMatch(numbers);

  return numbers.map(() => averageNum);
}

module.exports = communismSort;
