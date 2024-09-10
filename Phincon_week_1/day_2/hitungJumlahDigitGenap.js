function hitungJumlahDigitGenap(angka) {
  let set = 0;

  while (angka) {
    set += angka % 2 === 0;
    angka = Math.floor(angka / 10);
  }

  return set;
}
console.log(hitungJumlahDigitGenap(1234567890));
