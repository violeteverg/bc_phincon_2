function cariBilanganTerbesar(arr) {
  let angkaBesar = Math.max(...arr);
  return angkaBesar;
}

console.log(cariBilanganTerbesar([3, 7, 2, 9, 1]));
