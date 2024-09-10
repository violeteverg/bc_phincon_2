function hitungJumlahHurufKapital(kalimat) {
  return kalimat.replace(/[^A-Z]/g, "").length;
}

console.log(hitungJumlahHurufKapital("Saya Belajar JavaScript Di DICODING"));
