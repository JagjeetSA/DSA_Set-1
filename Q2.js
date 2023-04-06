//  1 2 4 8 16 32 64 128 --> Output

function printNumbers(num) {
  if (typeof num !== "number" || Number.isNaN(num)) {
    return "Please enter a valid number";
  }

  if (num <= 1) {
    return "Please enter a number greater than 1";
  }

  for (let i = 1; i <= num; i *= 2) {
    console.log(i);
  }
}

printNumbers(128);
