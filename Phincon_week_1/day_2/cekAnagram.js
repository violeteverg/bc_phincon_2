function cekAnagram(kata1, kata2) {
  kata1 = kata1.replace(/\s/g, "").toLowerCase();
  kata2 = kata2.replace(/\s/g, "").toLowerCase();

  if (kata1.length !== kata2.length) {
    return false;
  }

  kata1 = kata1.split("").sort().join("");
  kata2 = kata2.split("").sort().join("");

  return kata1 === kata2;
}

console.log(cekAnagram("listen", "silent"));
