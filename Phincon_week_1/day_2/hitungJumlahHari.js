function hitungJumlahHari(tanggal1, tanggal2) {
  let tanggalSatu = new Date(tanggal1);
  let tanggalDua = new Date(tanggal2);

  let bedaWaktu = tanggalDua.getTime() - tanggalSatu.getTime();
  let bedaHari = bedaWaktu / (1000 * 60 * 60 * 24);
  return bedaHari;
}

console.log(hitungJumlahHari("2023-01-01", "2023-12-31"));
