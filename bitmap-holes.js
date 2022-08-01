// Calculate number of holes
function bitmapHoles(strArr) {
  // Split array of string
  let twoDim = strArr.map(data => data.split(""));

  // Initialize counter of 2, counter can be any number except 0 and 1
  let counter = 2;

  // Loop rows
  for (let i = 0; i < twoDim.length; i++) {
    // Loop cols
    for (let j = 0; j < twoDim[i].length; j++) {
      // Check if element is zero
      if (twoDim[i][j] == "0") {
        // Search all direction (left, right, up, down) and replace with counter if found
        searchHole(twoDim, i, j, counter);

        // Increment counter to replace new number to the new hole
        counter++;
      }
    }
  }
  return counter - 2; // Subtract the same number which is initialized at first
}

// Search hole and replace it with a new number if found
function searchHole(arr, i, j, num) {
  // Replace new number to the position
  arr[i][j] = num;

  // Check if left is zero
  if (arr[i][j - 1] == "0") {
    // Replace hole
    arr[i][j - 1] = num;

    // Search hole from new position
    searchHole(arr, i, j, num);
  }

  // Check if right is zero
  if (arr[i][j + 1] == "0") {
    // Replace hole
    arr[i][j + 1] = num;

    // Search hole from new position
    searchHole(arr, i, j + 1, num);
  }

  // Check if up is zero
  if (arr[i - 1] != undefined && arr[i - 1][j] == "0") {
    // Replace hole
    arr[i - 1][j] = num;

    // Search hole from new position
    searchHole(arr, i - 1, j, num);
  }

  // Check if down is zero
  if (arr[i + 1] != undefined && arr[i + 1][j] == "0") {
    // Replace hole
    arr[i + 1][j] = num;

    // Search hole from new position
    searchHole(arr, i + 1, j, num);
  }
  return;
}

// Console some example outputs
console.group("Bitmap Holes");
console.log(
  `Number of Holes in array ["01111", "01101", "00011", "11110"] is ${bitmapHoles([
    "01111",
    "01101",
    "00011",
    "11110",
  ])}`
);
console.log(
  `Number of Holes in array ["10111", "10101", "11101", "11111"] is ${bitmapHoles([
    "10111",
    "10101",
    "11101",
    "11111",
  ])}`
);
console.log(`Number of Holes in array ["1011", "0010"] is ${bitmapHoles(["1011", "0010"])}`);
console.log(`Number of Holes in array ["1111", "1111"] is ${bitmapHoles(["1111", "1111"])}`);
console.groupEnd();

