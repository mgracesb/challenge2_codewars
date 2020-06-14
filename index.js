"use strict";

function findOdd(A) {
  A.sort((a, b) => a - b);
  let x;
  const arr = {};

  A.forEach((i) => {
    if (arr[i]) {
      arr[i]++;
    } else {
      arr[i] = 1;
    }
  });

  const j = Object.entries(arr);
  for (let i of j) {
    if (i[1] % 2 === 1) {
      x = Number(i[0]);
    }
  }
  return x;
}
