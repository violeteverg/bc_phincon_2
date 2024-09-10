function hitungKataUnik(kalimat) {
  let kataUnik = new Set(kalimat.split(" "));
  return kataUnik.size;
}

console.log(hitungKataUnik("Saya suka makan nasi suka minum air"));
