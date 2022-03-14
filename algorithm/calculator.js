
// 누산기 
function Calculator(){
    this.pluma = {
      "+" : (a,b)=> a+b,
      "-" : (a,b)=>  a-b,
    
    }; 
    this.calculate = function(str){
      let temp = str.split(" ");
      alert(this.pluma[temp[1]])
      let result = this.pluma[temp[1]](+temp[0],+temp[2]);
      return result;
    };
     this.addMethod = function(name,func){
    this.pluma[name] = func;
     }
  }
  
  let calc = new Calculator();
  let result = calc.calculate("1 + 2");
//   let result2 = calc.calculate("1 ** 2");
  calc.addMethod("**", (a, b) => a ** b);
  let result3 = calc.calculate("1 ** 2");
