//get average age -javascript_info 

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr){
   let result= arr.reduce((pre,curr,ar)=> curr.age + pre
    ,0)/arr.length;
    console.log(result)
}

