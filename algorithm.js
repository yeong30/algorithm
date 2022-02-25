let input = prompt("정수를 입력하시오 정수는 ,로 구분하시오");


//세개의 최댓값을 구하는 max3메서드를 작성하시오
// let inputArr = input.split(',',3)

function Max3(numberArr) {
    const a =+numberArr[0];
    const b =+numberArr[1];
    const c =+numberArr[2];

    let max =a;
    if(b > max) max =b;
    if(c > max) max= c;

    alert("최대값은 "+max+"입니다");

}

// 네개의 최댓값을 구하는 max4 메서드를 작성하시오
// let inputArr = input.split(',',4)
// Max4(inputArr);

function Max4(numberArr) {
    const a =+numberArr[0];
    const b =+numberArr[1];
    const c =+numberArr[2];
    const d =+numberArr[3];

    let max =a;
    if(b > max) max =b;
    if(c > max) max= c;
    if(d > max) max= d;

    alert("최대값은 "+max+"입니다");

}
//세개의 최솟값을 구하는 max4 메서드를 작성하시오
// let inputArr = input.split(',',3)
// min3(inputArr);
function min3(numberArr){

    const a =+numberArr[0];
    const b =+numberArr[1];
    const c =+numberArr[2];

    let min = a;
    if(b < min) min = b ;
    if(c < min) min = c ;

    alert("최솟값은 "+min+"입니다");

}
// 네개의 최솟값을 구하는 max4 메서드를 작성하시오

function min4(numberArr){

    const a =+numberArr[0];
    const b =+numberArr[1];
    const c =+numberArr[2];
    const d =+numberArr[3];


    let min = a;
    if(b < min) min = b ;
    if(c < min) min = c ;
    if(d < min) min = d ;

    return min;
}
let inputArr = input.split(',',3);
const a =+inputArr[0];
const b =+inputArr[1];
const c =+inputArr[2];

console.log(`med3(${a}, ${b}, ${c}) = `+med3(a,b,c));


//중앙값 구하기
function med3(a,b,c){
    if(a>=b){
        if(b>=c) return b;
        else if(a<=c) return a;
        else b;
    }else if(a > c) {
        return a;
    }else if(b>c){
        return c;
    }else return b;

}
console.log(`med3(${6}, ${4}, ${2}) = `+med3(6,4,2));
console.log(`med3(${8}, ${7}, ${456}) = `+med3(8,7,456));
console.log(`med3(243,56,8) = `+med3(243,56,8));
console.log(`med3(66,77,66) = `+med3(66,77,66));
console.log(`med3(34,35,35) = `+med3(34,35,35));

//중앙값 구하기
function med3_n(a,b,c){
    if((b>=c&&a>=c)||(a>=b&&c>=a)){
        return a;
    }else if((a>c&&b>=c)||(b>=c&&b>a)) {
        return b;
    }else return c;

}