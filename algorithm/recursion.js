//get number total;
//1. use for loop
function sumToFor(num) {
  console.log("run sumToFor");
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

document.write(`sumToFor(4)  = ${sumToFor(4)}`);
document.write("<br/>");

//2. use resursion
function sumToRecursion(num) {
  console.log("run sumToRecursion");

  if (num === 1) {
    return num;
  } else {
    return num + sumToRecursion(num - 1);
  }
}
document.write(`sumToRecursion(4)  = ${sumToRecursion(4)}`);
document.write("<br/>");

//2. use  AP
function sumToAP(num) {
  console.log("run sumToAP");

  return ((num - 1 + 1) * (num + 1)) / 2;
}
document.write(`sumToAP(4)  = ${sumToAP(4)}`);
document.write("<br/>");

function funcForbench() {
  let test1 = 0;
  let test2 = 0;
  let test3 = 0;

  for (let i = 0; i < 10; i++) {
    test1 = bench(sumToAP, 10);
    test2 = bench(sumToRecursion, 10);
    test3 = bench(sumToFor, 10);
  }
  document.write(" ================result ============");
  document.write("<br/>");

  document.write(" sumToAP : ");
  document.write(test1);
  document.write("<br/>");

  document.write(" sumToRecursion : ");
  document.write(test2);
  document.write("<br/>");

  document.write(" sumToFor : ");
  document.write(test3);
  document.write("<br/>");
}

function bench(f, num, other) {
  let start = Date.now();

  for (let i = 0; i < 2000; i++) {
    f(num, other && other);
  }
  return Date.now() - start;
}
// funcForbench()
// speed  sumToAP > sumToAP >>>>sumToRecursion

function factorial(n) {
  if (n != 1) return n * factorial(n - 1);
  else return 1;
}
document.write(" factorial(5) : ");
document.write(factorial(3));
document.write("<br/>");

//get fibonacci
// bad case
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}
console.clear();
//save the fs

//get fs by using loop
function fib2(n) {
  let f1 = 1;
  let f2 = 1;
  let fs = 1;

  for (let i = 3; i <= n; i++) {
    fs = f2 + f1;
    f1 = f2;
    f2 = fs;
  }
  return fs;
}

let fMap = new Map();

function fib3(n) {
  let result = fMap.has(n);
  if (n == 1 || n == 2) return 1;
  if (!result) {
    fMap.set(n, fib3(n - 1) + fib3(n - 2));
  }
  return fMap.get(n);
}

document.write(" fib2(5) : ");
document.write(fib2(100));
document.write("<br/>");

document.write(" fib3(7) : ");
document.write(fib3(100));
document.write("<br/>");

function funcForbench() {
  let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  };

  let test1 = 0;
  let test2 = 0;

  for (let i = 0; i < 1; i++) {
    test1 = bench(printList, list);
    test2 = bench(printListByRecursion, list);
  }
  document.write(" ================result ============");
  document.write("<br/>");

  document.write(" fib2 : ");
  document.write(test1);
  document.write("<br/>");
  document.write(" fib3 : ");
  document.write(test2);
  document.write("<br/>");
  document.write("<br/>");
}

funcForbench();

cache = [0, 1, 1];
function fib5(num, cache) {
  if (cache[num] !== undefined) return cache[num];
  if (num < 2) return num;
  cache[num] = fib5(num - 1, cache) + fib5(num - 2, cache);

  return cache[num];
}
document.write("<br/>");
document.write(" fib5(7,caches) : ");
document.write(fib5(77, caches));
document.write("<br/>");

//print linked list

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

//use loop
function printList(list) {
  let temp = list;
  while (temp) {
    document.write(temp.value);
    temp = temp.next;
  }
}

//use recursion
function printListByRecursion(list) {
  document.write(list.value);
  if (!list.next) return;
  return printListByRecursion(list.next);
}
printList(list);
document.write("<br></br>");

printListByRecursion(list);

//print linked list reverse

//use loop
function printListR(list) {
  let temp = list;
  let arr = [];
  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }

  document.write(arr.reverse().join(""));
}

//use recursion
function printListByRecursionR(list) {
  if (list.next) {
    printListByRecursionR(list.next);
  }
  document.write(list.value);
}
document.write("<br></br>");

printListR(list);
document.write("<br></br>");

printListByRecursionR(list);

// factorial
// 팩토리얼은 재귀호출에서 기본적으로 사용되는 개념

// 유클리드 호법
// : 최대공약수를 구하는 알고리즘
//정수  x, y( 단, x > y)의 최대공약수 gcd(x,y)는 y=0이면 x이고 아니면 gcd(y,x % y)를 재귀호출하여 구할 수 있다.
function gcd(x, y) {
  console.log(`gcd -  x : ${x} ,  y : ${y}  and ${y === 0} d`);
  if (y == 0) {
    console.log("end !! y is 0 and x is " + x);
    return x;
  } else {
    return gcd(y, x % y);
  }
}

//재귀호출 없이 팩토리얼 작성하기
function factorialLoop(a) {
  let res = 1;

  for (let i = a; i > 0; i--) {
    res *= i;
  }
  return res;
}

//재귀호출 없이 최대공약수 작성하기
function gcdLoop(x, y) {
  while (y > 0) {
    let temp = x % y;
    [x, y] = [y, temp];
    console.log(`gcdLoop -  x : ${x} ,  y : ${y}`);
  }
  return x;
}

//배열의 최대공약수 구하기
function gcdArray(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    temp = gcd(arr[i], temp);
  }
  return temp;
}

// console.log(`result : ${gcdArray([15, 14, 16, 18])}`);

//배열의 최대공약수 구하기 -재귀호출

function gcdArray2(a, start, no) {
  if (no == 1) {
    return a[start];
  } else if (no == 2) return gcd(a[start], a[start + 1]);
  else return gcd(a[start], gcdArray(a, start + 1, no - 1));
}

// 재귀 호출의 순서

function recur(n) {
  console.log(n + "번 진입");
  if (n > 0) {
    recur(n - 1);
    console.log(n);
    recur(n - 2);
  }
}
/**  하향식 분석
 * 가장 위쪽에 위치한 메소드 호출부터 시작해 계단식으로 자세히 조사하는 분석 기법
 *
 */
/** 상향식 분석
 * 아래쪽부터 쌓아올려 분석하는 방법
  
 * recur(n) 
 * n>0 이므로 n=1  부터 시작
 * recur(1) = recur(0) console,log(1) recur(-1) => 1 만 출력
 * recur(2) = recur(1) console,log(2) recur(0) => 1 ,2 출력
 * recur(3) = recur(2) console,log(3) recur(1) => 1 ,2 ,3,1출력
...
* 
 */

function recur2(n) {
  console.log(n + "번 진입");
  if (n > 0) {
    recur2(n - 2);
    recur(n - 1);
  }
}

class AStack {
  constructor(max) {
    this.max = max;
    this.pt = 0;
    this.stk = [];
  }
  pop() {
    if (this.pt <= 0) throw "stack is null";
    else {
      return this.stk[--this.pt];
    }
  }
  push(item) {
    if (this.pt >= this.max) throw "stack is full";
    else this.stk[this.pt++] = item;
    return item;
  }
  isEmpty() {
    return this.pt <= 0;
  }
  isFull() {
    return this.pt >= this.max;
  }
  peek() {
    if (this.pt <= 0) throw "stack is null";
    else return this.stk[this.pt - 1];
  }
}

function recur3_1(n) {
  if (n > 0) {
    recur(n - 1);
    recur(n - 2);
    document.write(n + "<br/>");
  }
}
// 재귀를 비재귀 함수로 변경
function recur3_2(n) {
  let stk = new AStack(100);
  let stepStk = new AStack(100);
  let step = 0;
  while (true) {
    if (n > 0) {
      console.log(n);

      if (step == 0) {
        stk.push(n);
        stepStk.push(step);
        n--;
        continue;
      } else if (step == 1) {
        stk.push(n);
        stepStk.push(step);
        step = 0;
        n = n - 2;
        continue;
      }
    }
    if (!stk.isEmpty()) {
      n = stk.pop();
      step = stepStk.pop() + 1;
      if (step == 2) {
        document.write(n + "<br/>");
        continue;
      } else {
        continue;
      }
    } else {
      break;
    }
  }
}
let rs = recur(3);
