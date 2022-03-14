function multi99Table(){
    document.write("곱셈표")

    document.write("<br/>")

    for(let i = 1; i<10 ;i++){
        for(let j = 1; j<10 ;j++){
            document.write(i*j +" ")
        }
    document.write("<br/>")
    }
}

function multi99TableQ12() {
    document.write("곱셈표")
    document.write("<br/>  ")
    document.write("   | ")
    for(let i = 1; i<10; i++){
        document.write(i +" ");
    }
    document.write("<br/>")
    document.write("--+---------------------------")

    for(let i = 1; i<10 ;i++){
        document.write("<br/>" + i + " | ")

        for(let j = 1; j<10 ;j++){
            document.write(i * j +" ")
        }
    }
}

function sum99TableQ13() {
    document.write("덧셈표")
    document.write("<br/>  ")
    document.write("   | ")
    for(let i = 1; i<10; i++){
        document.write(i +" ");
    }
    document.write("<br/>")
    document.write("--+---------------------------")

    for(let i = 1; i<10 ;i++){
        document.write("<br/>" + i + " | ")

        for(let j = 1; j<10 ;j++){
            document.write(i + j +" ")
        }
    }
}

function printRectangleQ14() {
    document.write("사각형을 출력합니다.")
    document.write("<br/>  ")
    let number = prompt("단수를 입력하세요!")
    document.write("단수 : "+number)
    document.write("<br/>");

    for(let i= 0; i<number ; i++){
        for(let j= 0; j<number ; j++){
            document.write("*");
        }
        document.write("<br/>");
    }
}


function printRectangleQ14() {
    document.write("사각형을 출력합니다.")
    document.write("<br/>  ")
    let number = prompt("단수를 입력하세요!")
    document.write("단수 : "+number)
    document.write("<br/>");

    for(let i= 0; i<number ; i++){
        for(let j= 0; j<number ; j++){
            document.write("*");
        }
        document.write("<br/>");
    }
}


function printTrianleS1_8() {
    document.write("왼쪽아래가 직각인 이등변 삼각형을 출력합니다.")
    document.write("<br/>  ")
    let number;
    do{
        number  = prompt("몇단 삼각형입니까?")

    }while(number <= 0 )
 
    document.write("단수 : " + number)
    document.write("<br/>");

    for(let i = 1; i <= number ; i++){
        for(let j = 1; j<=i ; j++){
            document.write("*");
        }
        document.write("<br/>");
    }
}


function printTrianleQ15() {
    document.write("왼쪽위 직각인 이등변 삼각형을 출력합니다.")
    document.write("<br/>  ")
    let number;
    do{
        number  = +prompt("몇단 삼각형입니까?")
    }while(number <= 0 )
 
    document.write("단수 : " + number)
    document.write("<br/>");

    for(let i = number; i >= 1 ; i--){
        for(let j = 1; j<=i ; j++){
            document.write("*");
        }
        document.write("<br/>");
    }
}
function printTrianleQ15_2() {
    document.write("오른쪽 위가 직각인 이등변 삼각형을 출력합니다.")
    document.write("<br/>  ")
    let number;
    do{
        number  = +prompt("몇단 삼각형입니까?")
    }while(number <= 0 )
    document.write("단수 : " + number)
    document.write("<br/>");
    for(let i = 1; i <= number ; i++){
        for(let j = 1; j <= number ; j++){
            if(i > j){
                document.write("_");
            }else {
                document.write("*");
            }
        }
        document.write("<br/>");
    }
}
function printTrianleQ15_3() {
    document.write("오른쪽 아래가 직각인 이등변 삼각형을 출력합니다.")
    document.write("<br/>  ")
    let number;
    do{
        number  = +prompt("몇단 삼각형입니까?")
    }while(number <= 0 )
    document.write("단수 : " + number)
    document.write("<br/>");
    for(let i = 1; i <= number ; i++){
        for(let j =number; j >= 1 ; j--){
            // 1 5 _
            //  1 4 _
            //1_1
            if(i < j){
                document.write("_");
            }else {
                document.write("*");
            }
        }
        document.write("<br/>");
    }
}
function printTrianleQ16() {
    document.write("피라미드를 출력합니다.")
    document.write("<br/>  ")
    let number;
    do{
        number  = +prompt("몇단 피라미드입니까?")
    }while(number <= 0 )
    document.write("단수 : " + number)
    document.write("<br/>");
        for(let i= 1; i<=number; i++){
        let count = 1+ 2*(i-1); 7
            for(let k=1; k <= (number-i)+1 ;k++){
               document.write("_");
            }
            for(let j= 1 ; j<=count ; j++){
               document.write(i % 10);
            }
        document.write("<br/>");
        }
        document.write("<br/>");
}


printTrianleQ16();