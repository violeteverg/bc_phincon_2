function hitungBilanganGanjil(n) {
  let angka = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      angka++;
    }
  }
  return angka;
}
console.log(hitungBilanganGanjil(10));
