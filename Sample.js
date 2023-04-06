function printNumbers(num){
  
    if(typeof num !== "number" || Number.isNaN(num)){
      return "Please enter a valid number"
    }
    
    if(num <=1){
      return "Please enter a number greater than 1"
    }
    
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }
  }
  
  printNumbers(10)
  printNumber()
  printNumber(100)
  printNumber()





/* 2nd Loop Exercise


The output of the problems is written on a single line for brevity; your solutions will output each value on a new line like in the example above.

0 100 200 300 400 500 600 700 800 900 1000
1 2 4 8 16 32 64 128
0 2 4 6 8 10
3 6 9 12 15
9 8 7 6 5 4 3 2 1 0
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4  */