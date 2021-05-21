convertFahrToCelsius = (_Fahr) => {
    if(_Fahr == null){

    
      return (` ${JSON.stringify(_Fahr)} please Enter an input value of farenheit for conversion`);
    
    }else if( Array.isArray(_Fahr) === true  ){

    
      return (` ${JSON.stringify(_Fahr)} is not a valid number but a/an array`)
    
    }else if (typeof _Fahr === 'object'  && !Array.isArray(_Fahr) && typeof _Fahr !== null ){


        
    
      return (`${JSON.stringify(_Fahr)} is not a valid number but a/an object`);
    
    }else if (_Fahr == /[a-zA-Z]/ || "/[a-zA-Z]/"){

    
      return ( `${JSON.stringify(_Fahr)} is not a valid number but a/an string`);

    }else{
     
        const C = `${((_Fahr - 32)*(5/9)).toFixed(4)} deg C`
        console.log(C);
    }
}
convertFahrToCelsius(0);

convertFahrToCelsius({temp:0});
console.log(convertFahrToCelsius('this boy'));



 //assignment 2

 checkYuGiOh = (n)=> {

     if (n == null){
         return (`invalid parameter ${JSON.stringify(n)}`);
     }else{
         
         let regExMe = /[a-zA-Z]/
          regExTest = regExMe.test(n);
    
     }if ( regExTest === true && typeof n !== 'object'){
        return (`invalid parameter ${JSON.stringify(n)}`)

     }else if(Array.isArray(n) === true){
        return (`invalid parameter ${JSON.stringify(n)}`)

     }else  if(typeof n == 'object'  && n !== null && !Array.isArray(n)){
        return (`invalid parameter ${JSON.stringify(n)}`)

     }else {
        let num = Number(n)

        let result = []
        for (let i = 1; i <= num; i++) {
          if (i % 2 == 0 && i % 3 !== 0 && i % 5 !== 0) {
            result.push('yu')
          }
          else if (i % 3 == 0 && i % 2 !== 0 && i % 5 !== 0) {
            result.push('gi')
          }
          else if (i % 5 == 0 && i % 3 !== 0 && i % 2 !== 0) {
            result.push('oh')
          }
          else if (i % 5 == 0 && i % 3 == 0 && i % 2 !== 0) {
            result.push('gi-oh')
          }
          else if (i % 5 == 0 && i % 3 !== 0 && i % 2 == 0) {
            result.push('yu-oh')
          }
          else if (i % 5 !== 0 && i % 3 == 0 && i % 2 == 0) {
            result.push('yu-gi')
          }
          else if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
            result.push('yu-gi-oh')
          }
          else {
            result.push(i)
          }
  
        }
        return result;
  
      }
  
}
checkYuGiOh('text');

console.log(checkYuGiOh("fizzbuzz is meh"));
