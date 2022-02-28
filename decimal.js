function getPrimeNumber1(){
    let decimalArr=[];
    let counter =0;
  nextNumber:  for(let i=2; i<=1000;i++){
        for(let j=2 ; j<i ; j++){
            counter++;
            if(i%j===0) continue nextNumber;
        }

        decimalArr.push(i);
    }
   
    document.write("실행 횟수 : " +counter);
    document.write("<br/>");


    document.write(decimalArr)
    return decimalArr;


}



function getPrimeNumber2(){

    let prime =[];  //소수 저장
    let counter =0;
//2는 소수이므로 기본값으로 넣어둔다.
    prime.push(2);
    //2를 제외한 짝수는 소수가 아니므로 홀수만 검사.
    nextNumber:  for(let i=3; i<=1000;i+=2){
        
        for(let j=1; j<prime.length; j++){
            counter++;
            if(i%prime[j]===0) continue nextNumber;
        }
        console.log("i : " +i) 
        prime.push(i);
    }
    document.write("실행 횟수 : " +counter);
    document.write("<br/>");
    document.write("prim : "+prime)
    return prime;
}
//getPrimeNumber1 같은 함수는 2,3으로 나누어지지 않는 수도 6으로다시 나눈는 식이 포함됨.
// 2,3으로 나누어지지 않는 순느 6으로도 나누어지지 않음
let result = getPrimeNumber1();

//getPrimeNumber2와 같이소수만으로 검증을 하면 좀 더 감소시킬 수 있음
let result2 =getPrimeNumber2();
// 1보다 2의 실행 횟수가 현저하게 감소.

// 누적 일 계산기. 
function dayOfyear(year, month, day){
    let mdays=[
        [31,28,31,30,31,30,31,31,30,31,30,31],
        [31,29,31,30,31,30,31,31,30,31,30,31],]

    let days=0;
    let isleap = +isLeap(year);
    for(let i=0; i<month-1;i++){
        days += mdays[isleap][i];
    };
  
    return days+day;
}
//윤년여부 계산. 윤년=1, 평년 =0
function isLeap(year){
    return  (year%4==0&&year%100!=0)||year%400==0 ? 1:0
}
document.write("그 해 ");

document.write(dayOfyear(2019,3,15));
document.write("일째 입니다.");

//practice 2-Q8
//i와 Days 없이 구하시오.
function dayOfyearQ8(year, month, day){
    let mdays=[
        [31,28,31,30,31,30,31,31,30,31,30,31],
        [31,29,31,30,31,30,31,31,30,31,30,31],]
    let counter=1;
    let isleap = +isLeap(year);
    while(counter<month){
        day += mdays[isleap][counter];
        counter++;
    }
  
    return day;
}
function isLeap(year){
    return  (year%4==0&&year%100!=0)||year%400==0 ? 1:0
}
document.write("<br/>")

document.write("그 해 ");
document.write(dayOfyearQ8(2019,3,15));
document.write("일째 입니다.");

//practice 2-Q9
//그 해의 남은 일수를 구하시오
function leftDayOfyearQ8(year, month, day){
    let mdays=[
        [31,28,31,30,31,30,31,31,30,31,30,31],
        [31,29,31,30,31,30,31,31,30,31,30,31],]

    let days=0;
    let isleap = +isLeap(year);
    for(let i=0; i<month-1;i++){
        days += mdays[isleap][i];
    };
        
        return 365+isLeap(year) -days
  
}
function isLeap(year){
    return  (year%4==0&&year%100!=0)||year%400==0 ? 1:0
}
document.write("<br/>")

document.write("그 해 ");
document.write(dayOfyearQ8(2021,11,01));
document.write("일째 입니다.");
document.write("<br/>")
document.write("남은 일 수: ");
document.write(leftDayOfyearQ8(2021,11,01));