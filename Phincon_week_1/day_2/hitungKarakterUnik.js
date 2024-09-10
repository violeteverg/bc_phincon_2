function hitungKarakterUnik(str) {
  let kataUnik = new Set();

  for (let i = 0; i < str.length; i++) {
    kataUnik.add(str[i]);
  }
  return kataUnik.size;
}

console.log(hitungKarakterUnik("hello world"));
