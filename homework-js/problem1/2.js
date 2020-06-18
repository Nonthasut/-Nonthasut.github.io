let sum = 0;
for (i = 160; i <= 2048; i++) {
  if (i % 2 == 0) {
    sum += i
  } else if (i % 2 != 0) {
    sum += 0;
  }
}