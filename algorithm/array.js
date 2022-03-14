 //배열의 선언.
let a = new Array(4);

a[0] = 2;
a[1] = 4;
a[2] = 6;
a[3] = 8;

document.write("<br/>");

for(let i=0; i<a.length;i++){
document.write(a[i]);
document.write("<br/>");

}

let b = a;
document.write("b[1] = ");
document.write(b[1]);

document.write("<br/>");
document.write("a[1] = ");
document.write(a[1]);

document.write("a[1] = ");
document.write(a[1]);

// 배열의 최댓값 구하기

function max(arr){
    let max = arr[0];

    for(let i=1; i<arr.length; i++){
        if(max<arr[i]) max = arr[i]
    }

return max;
}
document.write("<br/>");
document.write("최댓값 : ");
document.write(max(b));

// 랜덤한 수를 배열로 만들어 최댓값을 구하라
function makeArr(){
    let count = 5;
    let arr= new Array(count);
    for(let i=0; i<arr.length; i++){
        arr[i] = +prompt(i +"번 키를 입력하시오")
    }
    return arr;
}
//난수 생성기
function getRandom(min,max){
  return Math.floor( Math.random()*(max-min+1))+ min;
}

function maxOfRandom(){
    let count = +getRandom(1,3);
    let peoples = new Array(count);

    for(let i=0; i<peoples.length; i++){
        peoples[i] = getRandom(100,120);  
    }
    document.write( peoples );
    document.write("중에서 " );


    return max(peoples);

  }
  document.write("<br/>");
document.write(maxOfRandom());


// 배열 역순 구하기
let user = new Array(4); //배열의 선언.

user[0] = 2;
user[1] = 4;
user[2] = 6;
user[3] = 8;

function swap(arr, idx1, idx2){
    let t = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] =t;
}

function reverse(arr){
    for(let i=0; i<arr.length/2;i++){
        swap(arr, i , arr.length-i-1);
    }
    console.log(arr)
    return arr;

}

// Practice 2-Q2
let arr=[5,10,73,2,-5,42];
document.write("<br/>");
document.write("<br/>");
document.write("<br/>");


getReverseArr(arr);
function getReverseArr(arr){
    document.write(`대상 배열 : ${arr}`  )
    document.write("<br/>");
    document.write("=================<br/>");

    
    for(let i=0; i<arr.length/2;i++){
        document.write(`a[${i}]와 a[${arr.length-i-1}]를 교환합니다.`)
        swap(arr, i , arr.length-i-1);
        document.write("<br/>");
        document.write(`현재 배열 : ${arr}` )
        document.write("<br/>");
    }
    
}
// Practice 2-Q3 
//배열의 모든 합계를 구하여 반환하는 함수

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

function sumOfAll(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++){
        sum+=arr[i]
    }
    document.write("<br/>");
    document.write(`현재 배열 : ${arr}의 총합은 ${sum } 입니다.` )
    return sum;
}
// sumOfAll(arr);


//사용자로부터 배열값 입력받는 함수
function getArrPrompt(){
let count = +prompt("배열의 길이 : ", 1);
let arr= new Array(count);
    for(let i=0; i<arr.length; i++){
        arr[i] = +prompt(i+"번 요소의 값 : ",0);
    }
    return arr
}

//두 배열의 동일여부 비교



// let target = getArrPrompt();
// let target2 = getArrPrompt();

// document.write("두 배열은 ");
// document.write(eqauls(target,target2)?"같습니다" :"다릅니다.");
 function eqauls(arr1,arr2){

    if(arr1.length!==arr2.length) return false;
    for(let i = 0; i<arr1.length; i++) {
        if(arr1[i]!== arr2[i]) return false;
    }
    return true;
}

//Practice 2-Q4

//배열의 요소를 카피하는 함수

// let target3 = getArrPrompt();
// let newArr= copyArr(target3);
// let temp = newArr;

// document.write(target3+ " 를 가진 배열을 카피한 배열 => ");
// document.write(newArr);

// document.write("<br/>");

function copyArr(targetArr){
    let newArr= [];

    for(let i = 0; i<targetArr.length; i++) {
        newArr[i] = targetArr[i]
        console.log(newArr)
    }
    
    return newArr;
}
//Practice 2-Q5
//배열의 요소를  역순으로 카피하는 함수

document.write("<br/>");
document.write("<br/>");
document.write("<br/>");

let target4 = getArrPrompt();
function copyArrReverse(targetArr){
    let newArr= [];

    for(let i = 0; i<targetArr.length; i++) {
        newArr[i] = targetArr[targetArr.length-i-1];
    }
    
    return newArr;
}
let newArr2= copyArrReverse(target4);
document.write(target4+ " 를 가진 배열을 카피한 배열 => ");
document.write(newArr2);



//javascript_info 
//배열내 객체의 id를 키값으로 하는  객체로 반환하는 함수
function groupById(users){
    return users.reduce((pre,curr)=>{
      pre[curr.id]= curr;
      return pre;
      },{});
    }
  
  groupById(users);

//javascript_info 
//중복데이터 제거
function unique(arr) {

    let temp =[];
    arr.forEach(element => {
        if(!temp.includes(element)) {
            console.log(element);
            temp.push(element)
        }
    });
console.log(temp);
    return temp;  
}
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  