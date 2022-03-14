

  let itera =Symbol.iterator;
  let range = {
    from: 1,
    to: 4,
    [itera] :function(){
        return {
            current: this.from,
            last:this.to,
            next(){
                if(this.current<=this.last){
                    return {done:false, value:this.current++};
                }else{
                    return {done:true}
                }
            }
        }
    }
  };
  for (let item of range){
      console.log(item);
  }

  let str ="hello";

  let iterator =str[Symbol.iterator]();
  while(true){
      let result = iterator.next();
      console.log(result)
      if(result.done) break;
  }
  let arrayLike = {
    0: "Hello",
    1: "World",
    "f":"possible",
    length: 3
  };
  
  let arr = Array.from(arrayLike); // (*)
  
  // 각 숫자를 제곱
let arr2 = Array.from(range, num =>console.log(num));
console.log(arr2)

let arr3 = Array.from('𝒳😂'); // (*)
console.log(arr3)
