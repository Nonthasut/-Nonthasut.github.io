let a;
  let b = 0;
  let n = 0;
  let sum;
  while (true) {
    a = prompt("Add data");
    if (a !== "stop") {
      b = +a;
      n++
    } else if (a === "stop") {
      alert(Number(b) / n)
      break;
    }
  }
