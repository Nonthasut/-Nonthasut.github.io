let sum = 0;
for (i = 0; i <= 18954; i++) {
  if (i % 2 !== 0) {
    sum += i;
  } else if (i % 2 == 0) {
    sum -= i;
  }
} alert(sum)