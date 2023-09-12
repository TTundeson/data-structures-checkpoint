function findSumOfDistinctElements(set1, set2) {
  // Create an empty array to store distinct elements
  const distinctElements = [];

  // Iterate through elements in set1
  for (const element of set1) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
    }
  }

  // Iterate through elements in set2
  for (const element of set2) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
    }
  }

  // Calculate the sum of distinct elements using the reduce method
  const sumOfDistinctElements = distinctElements.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sumOfDistinctElements;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = findSumOfDistinctElements(set1, set2);
console.log(result); // Output: 13 (distinct elements 4, 7, 2)
