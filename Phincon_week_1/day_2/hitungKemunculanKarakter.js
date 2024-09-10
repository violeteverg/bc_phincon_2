function hitungKemunculanKarakter(str) {
  const hasil = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (hasil[char]) {
      hasil[char] += 1;
    } else {
      hasil[char] = 1;
    }
  }

  return hasil;
}

console.log(hitungKemunculanKarakter("hello world"));
