function bandingkanAngka(a, b) {
  if (b > a) {
    return true;
  } else if (a === b) {
    return -1;
  } else {
    return false;
  }
}
console.log(bandingkanAngka(2, 1));

function balikKata(name) {
  let split = name.split("");
  let reverse = split.reverse();
  let joinArray = reverse.join("");

  return joinArray;
}

console.log(balikKata("John Doe"));
