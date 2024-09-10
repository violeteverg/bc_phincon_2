function cekPalindrom(kata) {
  let formatKata = kata.replace(/[^a-zA-Z0-9]+/gi, "").toLowerCase();
  let isPalindrom = formatKata == formatKata.split("").reverse().join("");
  return isPalindrom;
}

console.log(cekPalindrom("hello"));
