function hitungKemunculankata(kalimat, kata) {
  return kalimat.split(kata).length - 1;
}

console.log(
  hitungKemunculankata(
    "Saya sukasuka makan nasi, saya juga suka minum air",
    "Saya"
  )
);
