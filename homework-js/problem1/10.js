let a;
let b = Infinity;
while (true) {
  a = prompt("Add data");
  if (Number(a) < b) {
    b = Number(a)
  } else if (a === "stop") {
    alert(b)
    break;
  }

}