import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
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
    snapshot(nums);
  }
  snapshot(nums);
  return nums;
}

export default function SortComponent() {
  clear();
  //   sort(shuffle(range(20)));
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  sort(nums);
  done();
  return <App />;
}
