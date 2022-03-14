"use strict";

  function isLeap(year){
    return year%4==0&&year%100!==0 ||year%400==0 ? 1 :0
  }

  function bench(f){
    let start = Date.now();
    for(let i= 0; i<10000; i++){
        f(2022,3);
    }
    return Date.now()-start;
  }


function getLastDayOfMonth2(year,month){
let mdays=[
    [31,28,31,30,31,30,31,31,30,31,30,31],
    [31,29,31,30,31,30,31,31,30,31,30,31],];
  return mdays[isLeap(year)][month]
}


function getLastDayOfMonth(year,month){
  return new Date(year,month+1,0).getDate();
}

let time1 =0;
let time2 =0;
  for(let k =0;k <10; k++){
   time1+= bench(getLastDayOfMonth2) ;
   time2+= bench(getLastDayOfMonth2) ;
  }
  alert(time1)
  alert(time2)

