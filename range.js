let range = (start, end, step) => {
  let array = [];
  for (let i = start; i <= end; i += step) {
    array.push[i];
    if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
      return [];
    } else {
      return array;
    }
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));