
//sumWhile(+input);

 function sumWhile(n){
    let sum = 0;
    let i= 1;
    
    while(i <= n){
        sum += i;
        
        i++;
        console.log(`i : ${i}`)
    }
    alert("최종 합 : "+sum)
}


function sumFor(n){
    let sum =0;
    console.log("ss"+n);
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
    
}

function sumForQ7(n){
    let arr= [];
        let sum =0;
        for(let i = 1; i <=n; i++){
            sum += i;
            arr.push(i);
            console.log(`i : ${i}`)
        }
      console.log(arr.join(" + ") + " = " + sum);
    }


function sumForQ8(n){
    let i = 1;
    let sum = (1+n)*(n-1+1)/2;
   let sum_2=(n + n**2)/2
   let sum3 = (n + 1) * (n / 2) + (n % 2 == 1 ? (n + 1) / 2 : 0); // 합
    return sum3
    
    }

//let input = prompt("정수를 입력하시오.");


    function sumOFQ9(a,b){
    let flag=0;
    let start=0;
    let sum=0;

    if(a>b) { 
        flag= a; start =b
    }else {
        flag= b; start =a;
    };


  while(start <= flag){
    sum += start;
    start++;
  }
  return sum;
}
// console.log(`sumFor(-5) = ${sumFor(-5)}`)
// console.log(`sumForQ8(7) = ${sumForQ8(7)}`)
// console.log(`sumOFQ9(1,5) =  ${sumOFQ9(1,5)}`);
// console.log(`sumOFQ9(7,41) =  ${sumOFQ9(7,41)}`);
// console.log(`sumOFQ9(7,41) =  ${sumOFQ9(6,4)}`);


function forSumPos(){
    let number;
    let input;
    do{
        input = +prompt("정수를 입력하시오.");
        number =input ;
    } while (input <= 0);

    return sumFor(number);
}

function forSumPosQ10(){
    let a = +prompt("정수 a를 입력하시오.");
    let b=0;
    while(a>b){
       b = +prompt("정수 b를 입력하시오.");
       if(b>a) break;
       console.log("a보다 큰 수를 입력하세요");
    }
    console.log(`b - a = ${b-a}`)
}

function getLengthQ11(){
    let a ;
    do{
        
       a = +prompt("정수를 입력하시오.");
    }while(a<=0)

    console.log(`그 수는 ${String(a).length} 자리 입니다.` )
}

function getLengthQ11_2(){
    let a ;
    let length=0;
    do{
       a = +prompt("정수를 입력하시오.");
    }while(a<=0)

    while(a >= 1){
        a = a/10;
        console.log(a)
        length++;
    }
    console.log(`그 수는 ${length} 자리 입니다.` )

}
getLengthQ11_2();