
// 입력된 기수로 변환.
function convRev(target,cardinal){
//
let digit = '0123456789ABCDEFGHIJKLMNOGOPQRS';
let digitArr = [];
let k= 0;

    do{
    digitArr.push(digit.charAt(target%cardinal));
    target = Math.floor(target/cardinal);
    }while(target>0);

    for(let i =0; i<Math.floor(digitArr.length/2); i++){
        k = digitArr[i];
        digitArr[i] = digitArr[digitArr.length-1];
        digitArr[digitArr.length-1] = k;
    }
    return digitArr

};

let stdIn = new Scanner();
function cardConvRev(){
    let no;
    let cd;
    let retry;
    document.write('10진수를 기수 변환합니다..');
    document.write('<br/>');

    do{
        document.write('============================');
    document.write('<br/>');

  

    no = stdIn.strInputPos('변화하려는 음이 아닌 정수  : ');
    document.write('변화하려는 음이 아닌 정수  :' +no);
    document.write('<br/>');

    cd = stdIn.strInputCustom('어떤 진수로 변환할 까요?' ,(value)=> value=>2&&value<=36)
    document.write('어떤 진수로 변환할 까요?  :' +cd);
    document.write('<br/>');


  let results=  convRev(no ,cd)
  for(let ele of results){
      console.log("results,lengh" +results.length);
      document.write(ele);

  }
  document.write('입니다.');
  document.write('<br/>');

    retry = +prompt("다시 하시겠습니까 예:1/아니오0")
    }while(retry===1);
}
printCardConvRev();

function printCardConvRev(){
    let no ;
    let cd ;
    let temp ;
    let other =0;
    let dno =[];




    no = stdIn.strInputPos('변화하려는 음이 아닌 정수  : ');
    temp=no;
    document.write('변화하려는 음이 아닌 정수  :' +no);
    document.write('<br/>');

    cd = stdIn.strInputCustom('어떤 진수로 변환할 까요?' ,(value)=> value=>2&&value<=36)
    document.write('어떤 진수로 변환할 까요?  :' +cd);
    document.write('<br/>');

    do{
        document.write(cd+' |          ');
        document.write(temp);
        other = temp%cd;
        temp = Math.floor(temp/cd);
        if(temp!=no) document.write("------" + other);
        dno.push(temp);

        document.write('<br/>');
        document.write('+-------------------');
        document.write('<br/>');
    }while(temp>0)
    document.write(temp+"------" + other);
    return dno;

}