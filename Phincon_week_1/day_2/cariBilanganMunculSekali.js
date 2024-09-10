function cariBilanganMunculSekali(arr) {
  const angkUnik = arr.filter((angka) => {
    return arr.indexOf(angka) === arr.lastIndexOf(angka);
  });

  return angkUnik;
}
console.log(cariBilanganMunculSekali([1, 2, 2, 3, 3, 4, 5, 5]));
