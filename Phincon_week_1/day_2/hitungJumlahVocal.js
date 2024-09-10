function hitungJumlahVocal(kata) {
  const regex = /[aeiou]/gi;
  const hurufSama = kata.match(regex);

  if (hurufSama) {
    return hurufSama.length;
  } else {
    return 0;
  }
}

console.log(hitungJumlahVocal("javascript"));
