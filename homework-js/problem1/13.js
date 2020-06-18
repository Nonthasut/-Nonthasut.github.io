let a;
let b = Infinity;
let c = -Infinity;
while (true) {
  a = prompt("Add data");
  if (Number(a) < b) {
    b = Number(a)
  }
  if (Number(a) > c) {
    c = Number(a)
  } else if (a === "stop") {
    alert(c - b)
    break;
  }
}