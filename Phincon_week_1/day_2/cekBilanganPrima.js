function cariBilanganPrima(angka) {
  let bilanganPrima = [];

  for (let i = 2; i <= angka; i++) {
    let isPrima = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrima = false;
        break;
      }
    }

    if (isPrima) {
      bilanganPrima.push(i);
    }
  }

  return bilanganPrima;
}

console.log(cariBilanganPrima(20));
