// 9 8 7 6 5 4 3 2 1 0 --> Output



function printNumbers(num) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      return "Please enter a valid number";
    }
  
    if (num <= 1) {
      return "Please enter a number greater than 1";
    }
  
    for (let i = num; i >= 0; i -= 1) {
      console.log(i);
    }
  }
  
  printNumbers(9);