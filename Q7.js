// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 --> Output



function printNumbers(num) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      return "Please enter a valid number";
    }
  
    if (num <= 1) {
      return "Please enter a number greater than 1";
    }
  
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j <= num; j++) {
          console.log(j);
        }
      }
    }
  
  
  printNumbers(4);



  // 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 --> Output



  function printNumbers(num) {
    if (typeof num !== "number" || Number.isNaN(num)) {
      return "Please enter a valid number";
    }
  
    if (num <= 1) {
      return "Please enter a number greater than 1";
    }
  
    for (let i = 0; i < num; i++) {
        for (let j = 0; j <= num; j++) {
          console.log(j);
        }
      }
    }
  
  
  printNumbers(4);