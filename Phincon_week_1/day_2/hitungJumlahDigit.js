function hitungJumlahDigit(angka) {
  return angka
    .toString()
    .split("")
    .reduce((a, b) => a + parseInt(b), 0);
}

console.log(hitungJumlahDigit(12345));
