class PhyscData{

    constructor(name,height,vision){
        this.name=name;
        this.height=height;
        this.vision=vision;


    }
}
function aveHeight(physcData){
    let sum = 0;
    for(let i=0;i<physcData.length; i++){
        sum+=physcData[i].height;
    }
    return sum /physcData.length
}

function distVision(physcData,dist){
    let i =0;
    dist[0] =0;
    for(i=0;i<physcData.length; i++){
    
        
      if(physcData[i].vision>=0.0&&physcData[i].vision<=2.1){

        dist[ physcData[i].vision*10]? dist[ physcData[i].vision*10]+=1 :dist[ physcData[i].vision*10]=1
      }
   }
   console.log(dist);
    return dist
}

document.write("# 신체검사 리스트 #<br/>");
document.write("<br/>");
document.write("이름__________키________시력<br/>");
let physcData =[
    new PhyscData("박현규", 162, 0.3),
    new PhyscData("함진아", 173, 0.7),
    new PhyscData("최윤미", 175, 2.0),
    new PhyscData("홍연의", 171, 1.5),
    new PhyscData("홍연2의", 171, 1),

    new PhyscData("이수진", 168, 0.4),
    new PhyscData("김영준", 174, 1.2),
    new PhyscData("박용규", 169, 0.8),
    new PhyscData("테스터", 169, 0.8),

];

// for(let i= 0; i<physcData.length;i++){
//     document.write(`${physcData[i].name}__________${physcData[i].height}________${physcData[i].vision}<br/>`);
// }
// document.write("<br/>평균 키 : "+aveHeight(physcData));
// document.write("<br/><br/>시력 분포 : <br/> ");

// let visionArr=[];
//  distVision(physcData,visionArr)

// for(let j=0;j<visionArr.length; j++ ){
//     console.log(visionArr[j])
//     document.write(`${j/10} ~ :  ${visionArr[j]?visionArr[j]:0}<br/>`);
// }

// practice 2-Q10
//시력분포를 점으로 출력하세요;

let visionArr=[];
 distVision(physcData,visionArr)
 for(let k=0; k<visionArr.length;k++){
     document.write(`<br/>${k/10 } ~ : `)
     for(let n=0;n<visionArr[k];n++){
        document.write(`*`)
     }
 }

 // practice 2-Q11
// 서기 년월일을 필드로 갖는 클래스를 만드세요
//윤년여부 계산. 윤년=1, 평년 =0


class YMD{
   
    
    constructor(y,m,d){
        this.y=y;
        this.m=m;
        this.d=d;
        this.mdays=[
            [31,28,31,30,31,30,31,31,30,31,30,31],
            [31,29,31,30,31,30,31,31,30,31,30,31],]
    }
     isLeap(year){
        return  (year%4==0&&year%100!=0)||year%400==0 ? 1:0
    }
    after(n){
        let copyY = this.y;
        let copyM =this.m;
        let copyD =this.d;
        copyD +=n;
        
       while(copyD>this.mdays[this.isLeap(copyY)][copyM-1]){
        copyD-=this.mdays[this.isLeap(copyY)][copyM-1];
        copyM++;
        if(copyM>12){
            copyY++;
            copyM=1;
        }
       }
       return `${copyY}년 ${copyM}월 ${copyD}일`;
    } 
    before(n){
        let copyY = this.y;
        let copyM =this.m;
        let copyD =this.d;
        copyD -=n;
        
        while(copyD<1){
         copyD+=this.mdays[this.isLeap(copyY)][copyM-2];
         copyM--;
         if(copyM<1){
             copyY--;
             copyM=12;
         }
        }
        return `${copyY}년 ${copyM}월 ${copyD}일`;
}
}
let days = new YMD(2022,3,1);
let af =days.after(3);
let bf =days.before(1);
document.write("after : "+af);
document.write("before : "+bf);
