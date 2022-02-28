//사용자에게 입력받는 input(prompt)
function Scanner(){
    this.strInputPos =function(msg){
        let value;
        do{
            value =  +prompt(msg, 1);
        }while(value<1);
        return value;
        };
    this.strInputNum =function(){
        let value;
        do{
            value =  +prompt(msg, 1);
        }while(value%1!==0);
        return value;
    };
    this.strInputCustom =function(msg,flag1=((value)=>{return true})){
        let value;
        do{
            value =  +prompt(msg, 1);
        }while(!flag1(value));
        return value;
        };
        
}
    