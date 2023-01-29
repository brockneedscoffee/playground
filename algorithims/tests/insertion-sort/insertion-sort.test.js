function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let numberToInsert = nums[i]; // this is the numberToInsert number we want to insert
    let j; // the inner counter

    // now loop from the right to left
    for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
      // move numbers to the right until we find where we want to insert
      nums[j + 1] = nums[j];
    }

    // now we insert
    nums[j + 1] = numberToInsert;
  }
  return nums;
}

test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
