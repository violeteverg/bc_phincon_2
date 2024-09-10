function cariFaktorBilangan(angka) {
  let hasil = [];
  for (i = 1; i <= angka; i++) {
    if (angka % i == 0) {
      hasil.push(i);
    }
  }
  return hasil;
}

console.log(cariFaktorBilangan(12));
