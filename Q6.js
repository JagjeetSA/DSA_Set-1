// 1 1 1 2 2 2 3 3 3 4 4 4 --> Output



function printNumbers(num) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      return "Please enter a valid number";
    }
  
    if (num <= 1) {
      return "Please enter a number greater than 1";
    }
  
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= 3; j++) {
          console.log(i);
        }
      }
    }
  
  
  printNumbers(4);