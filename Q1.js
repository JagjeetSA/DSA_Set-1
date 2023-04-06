// 0 100 200 300 400 500 600 700 800 900 1000 ---> Output





function printNumbers(num){
  
    if(typeof num !== "number" || Number.isNaN(num)){
      return "Please enter a valid number"
    }
    
    if(num <=1){
      return "Please enter a number greater than 1"
    }
    
    for (let i = 0; i <= num; i += 100) {
        console.log(i);
      
    }
  }

  printNumbers(10)
  