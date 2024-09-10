function konversiSuhu(suhu, jenis) {
  switch (jenis) {
    case "C":
      return `${(suhu * 9) / 5 + 32} (Fahrenheit)`;
    case "F":
      return `${((suhu - 32) * 5) / 9} (Celcius)`;
  }
}
console.log(konversiSuhu(86, "F"));
