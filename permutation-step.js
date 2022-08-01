function permutationStep(num) {
  const numbers = num.toString().split("");

  let sortedNum = num;
  for (let i = numbers.length - 1; i > 0; i--) {
    // Skip iteration if last number is less than the second last number
    if (numbers[i] <= numbers[i - 1]) continue;

    // Get right array after minimum number and sort that array
    const sortedRightArray = [...numbers].splice(i, numbers.length - 1).sort();

    // Get index of next greater number of less number
    const nextGreaterIndex = sortedRightArray.findIndex(num => num > numbers[i - 1]); // Less number

    // Get next greater number using index
    const nextGreaterNum = sortedRightArray[nextGreaterIndex];

    // Replace less number with next greater number
    sortedRightArray[nextGreaterIndex] = numbers[i - 1]; // Less number

    // Concat left array, next greater number and right array
    sortedNum = `${[...numbers].splice(0, i - 1).join("")}${nextGreaterNum}${sortedRightArray.join(
      ""
    )}`;
    break;
  }
  return sortedNum == num ? -1 : sortedNum;
}
console.group("Permutaion Step");
console.log(`Next greater number of 321 is: ${permutationStep(321)}`);
console.log(`Next greater number of 13435 is: ${permutationStep(13435)}`);
console.log(`Next greater number of 56465 is: ${permutationStep(56465)}`);
console.log(`Next greater number of 134543553 is: ${permutationStep(134543553)}`);
console.log(`Next greater number of 452342 is: ${permutationStep(452342)}`);
console.log(`Next greater number of 3231 is: ${permutationStep(3231)}`);
console.log(`Next greater number of 67467 is: ${permutationStep(67467)}`);
console.log(`Next greater number of 111 is: ${permutationStep(111)}`);
console.log(`Next greater number of 123 is: ${permutationStep(123)}`);
console.log(`Next greater number of 21 is: ${permutationStep(21)}`);
console.log(`Next greater number of 12 is: ${permutationStep(12)}`);
console.log(`Next greater number of 121 is: ${permutationStep(121)}`);
console.groupEnd();
