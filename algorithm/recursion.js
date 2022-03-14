
//get number total;
//1. use for loop
function sumToFor(num){
    console.log("run sumToFor")
    let sum=0;
    for(let i=1; i<=num; i++){
        sum+=i;
    }
    return sum;
}

document.write(`sumToFor(4)  = ${sumToFor(4)}`)
document.write("<br/>")

//2. use resursion
function sumToRecursion(num){
    console.log("run sumToRecursion")

    if(num===1){
        return num;
    }else{
        return num + sumToRecursion(num-1)
    }

}
document.write(`sumToRecursion(4)  = ${sumToRecursion(4)}`)
document.write("<br/>")


//2. use  AP
function sumToAP(num){
    console.log("run sumToAP")


 return (num-1+1)*(num+1)/2;

}
document.write(`sumToAP(4)  = ${sumToAP(4)}`)
document.write("<br/>")


function funcForbench(){

let test1 = 0;
let test2 = 0;
let test3 = 0;


for(let i= 0; i<10 ; i++){
    test1 = bench(sumToAP,10);
    test2 = bench(sumToRecursion,10);
    test3 = bench(sumToFor,10);
}
document.write(" ================result ============");
document.write("<br/>")

document.write(" sumToAP : ");
document.write(test1);
document.write("<br/>")

document.write(" sumToRecursion : ");
document.write(test2);
document.write("<br/>")

document.write(" sumToFor : ");
document.write(test3);
document.write("<br/>")

}

function bench(f,num,other){
    let start = Date.now();


    for(let i = 0;i<2000;i++){
        f(num, other&&other)
    }
    return Date.now() -start;
}
// funcForbench()
// speed  sumToAP > sumToAP >>>>sumToRecursion


function factorial(n){
    if( n != 1 ) return n * factorial(n-1) 
    else return 1;
    
}
document.write(" factorial(5) : ");
document.write(factorial(3));
document.write("<br/>")


//get fibonacci 
// bad case
function fib(n){
    if(n===1||n===2) {
        return 1;
    }else{
        return fib(n-1) + fib(n-2);
    }
}
console.clear();
//save the fs

//get fs by using loop
function fib2(n){
    let f1 = 1;
    let f2 = 1;
    let fs = 1;

    for(let i= 3; i<=n;i++){
        fs = f2+f1;
        f1 = f2;
        f2 = fs;
    }
    return fs;

}

let fMap = new Map();

function fib3(n){
    let result =fMap.has(n);
    if(n==1||n==2) return 1
    if(!result){
        fMap.set(n,fib3(n-1)+fib3(n-2))
    }
    return fMap.get(n);
}

document.write(" fib2(5) : ");
document.write(fib2(100));
document.write("<br/>")

document.write(" fib3(7) : ");
document.write(fib3(100));
document.write("<br/>")


function funcForbench(){

    let list = {
        value: 1,
        next: {
          value: 2,
          next: {
            value: 3,
            next: {
              value: 4,
              next: null
            }
          }
        }
      };

      

    let test1 = 0;
    let test2 = 0;

    for(let i= 0; i<1 ; i++){
        test1 = bench(printList,list);
        test2 = bench(printListByRecursion,list);
    }
    document.write(" ================result ============");
    document.write("<br/>")
    
    document.write(" fib2 : ");
    document.write(test1);
    document.write("<br/>")
    document.write(" fib3 : ");
    document.write(test2);
    document.write("<br/>")
    document.write("<br/>")
    
 


    }

    funcForbench();
    


cache = [0, 1,1];
function fib5(num,cache){
if(cache[num]!==undefined) return cache[num];
if(num<2) return num;
cache[num] = fib5(num-1,cache)+ fib5(num-2,cache)

return cache[num];
}
document.write("<br/>")
document.write(" fib5(7,caches) : ");
document.write(fib5(77,caches));
document.write("<br/>")


//print linked list

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//use loop
function printList(list){
    let temp  = list;
    while(temp){
        document.write(temp.value)
        temp = temp.next
    }
}

//use recursion
function printListByRecursion(list){
    document.write(list.value);
    if(!list.next) return ;
    return printListByRecursion(list.next)
}
printList(list);
document.write('<br></br>');

printListByRecursion(list);



//print linked list reverse


//use loop
function printListR(list){
    let temp  = list;
    let arr = [];
    while(temp){
        arr.push(temp.value);
        temp = temp.next
    }

    document.write( arr.reverse().join(''));
    
}

//use recursion
function printListByRecursionR(list){
    if(list.next) {
        printListByRecursionR(list.next)
    }
    document.write(list.value);

}
document.write('<br></br>');

printListR(list);
document.write('<br></br>');

printListByRecursionR(list);

