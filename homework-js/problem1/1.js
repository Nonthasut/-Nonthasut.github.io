let a = +prompt("Add a");
let b = +prompt("Add b");
while (a % 2 == 0 && b % 2 == 0) {
  a = a / 2
  b = b / 2
}
while (a % 3 == 0 && b % 3 == 0) {
  a = a / 3
  b = b / 3
}
while (a % 5 == 0 && b % 5 == 0) {
  a = a / 5
  b = b / 5
}
while (a % 7 == 0 && b % 7 == 0) {
  a = a / 7
  b = b / 7
}
console.log(a + "/" + b)
