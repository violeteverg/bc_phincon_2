function hitungRataRata(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

console.log(hitungRataRata([1, 2, 3, 4, 5]));
