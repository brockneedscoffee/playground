const lookingFor = { id: 5, name: "Brian" };
let dataArray = [
  { id: 1, name: "Sam" },
  { id: 11, name: "Sarah" },
  { id: 21, name: "John" },
  { id: 10, name: "Burke" },
  { id: 13, name: "Simona" },
  { id: 31, name: "Asim" },
  { id: 6, name: "Niki" },
  { id: 19, name: "Aysegul" },
  { id: 25, name: "Kyle" },
  { id: 18, name: "Jem" },
  { id: 2, name: "Marc" },
  { id: 51, name: "Chris" },
  lookingFor,
  { id: 14, name: "Ben" },
];

function sortById(array) {
  array.sort((a, b) => a.id - b.id);
  return array;
}

function binarySearch(id, array) {
  array = sortById(array);
  let min = 0;
  let max = array.length - 1;
  let index;
  let element;

  while (min <= max) {
    index = Math.floor((min + max) / 2);
    element = array[index];

    if (element.id < id) {
      min = index + 1;
    } else if (element.id > id) {
      max = index - 1;
    } else {
      return element;
    }
  }

  return void 0;
}

test("binary search", function () {
  expect(binarySearch(5, dataArray)).toBe(lookingFor);
});
//for (let j = i + 1; j < nums.length; j++) {

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.lenght; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
  }
  return count;
};

var numIdenticalPairs = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count += 1;
      }
    }
  }
  return count;
};
