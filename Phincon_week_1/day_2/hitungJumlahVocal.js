function hitungJumlahVocal(kata) {
  const regex = /[aeiou]/gi;
  // const hurufSama = kata.split("").filter((i) => {
  //   console.log(regex);
  //   return i !== regex;
  // });
  const hurufSama = kata.split("");
  let filterHuruf = [];
  for (let i = 0; i < hurufSama.length; i++) {
    if (hurufSama[i] === regex) {
      filterHuruf.push(hurufSama[i]);
    }
  }
  console.log(">>>", hurufSama);
  console.log(">>>", filterHuruf);

  if (hurufSama) {
    return hurufSama.length;
  } else {
    return 0;
  }
}

console.log(hitungJumlahVocal("javascript"));
