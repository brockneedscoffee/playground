const mergeSort = (nums) => {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // merge takes two sorted lists and returns one sortled list
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const results = [];

  //loop until one of the lists runs out
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      // shift removes the first element in an array and returns it
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // either left or right will be empty so it can be concat

  return results.concat(left, right);
};

test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
