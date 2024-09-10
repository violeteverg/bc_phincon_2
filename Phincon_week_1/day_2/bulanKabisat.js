function cekTahunKbaisat(n) {
  let tahunKabisat = n % 100 === 0 ? n % 400 === 0 : n % 4 === 0;
  return tahunKabisat;
}

console.log(cekTahunKbaisat(2024));
