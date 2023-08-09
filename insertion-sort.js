// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  // Copy the original array
  let copy = [...arr];
  // Create an array to store the sorted values
  let sorted = [];

  // While the array is not empty:
  while (copy.length > 0) {
    // make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(","));
    // Pop a value from the array
    let popped = copy.pop();
    // Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);
    // Keep track of the insertion point
    let insertionPoint = 0;
    // Walk through the sorted array in reverse order
    for (let i = sorted.length - 2; i >= 0; i--) {
      // Check if the value to the left is smaller than the new value
      if (sorted[i] < popped) {
        // If so, you've reached the insertion point so exit the loop
        insertionPoint = i + 1;
        break;
      }
      // If not shift the value to the right by 1 and continue
      else {
        sorted[i + 1] = sorted[i];
      }
    }
    // Insert the unsorted value at the break point
    sorted[insertionPoint] = popped;
  }
  // Return the sorted array
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  //   Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;
  // Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(arr.join(','));
    // Grab the first value from the unsorted half
    let first = arr[divider];
    // For each value starting from the divider,

    for (let i = divider; i >= 0; i--) {
      // Check if the value to the left is smaller than the unsorted value
      if (arr[i - 1] === undefined || arr[i - 1] < first) {
        // If so, you've reached the insertion point so exit the loop
        // Insert the unsorted value at the break point
        arr[i] = first;
        break;
      }
      // If not shift the value to the right by 1 and continue
      arr[i] = arr[i - 1];

    }
    // Increment the dividing pointer and repeat
    divider++;
  }
  // Return the mutated array
  return arr;
}
let arr = [];
for (let i = 1000; i > 1; i--) {
  arr.push(i);
}
insertionSort(arr);
module.exports = [insertionSort, insertionSortInPlace];
