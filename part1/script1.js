function calculate (a,b,operator){
    if(typeof a !== 'number' || typeof b !=='number' || (operator === '/' && b === 0)){
            return 'invalid arguments';
         }
         
switch(operator){
    case "+" :
        return a +b;
    
    case "-" :
      return a-b;

      
    case "*":
        return a*b;

    case "/":
        return a/b;
        default :
         return "invalid arguments";

 }
}
console.log(calculate(2, 3, '+')); 
console.log(calculate(2, 3, '-')); 
console.log(calculate(2, 0, '/'));
console.log(calculate(2, 4, '*'));