

class Stack{
    constructor(max){
        this.ptr =0;
        this.stk =[];
        this.max = max;
    }
    push(x){
        if(this.ptr>=this.max)  throw "stack is full!" 
        this.stk[this.ptr++] = x;
    }
    pop(){
        if(this.ptr<=0) throw "stack is empty!" 
        return this.stk[--this.ptr];
    }
    peek(){
        if(this.ptr<=0) throw "stack is empty!" 
        return this.stk[this.ptr-1];
    }
    indexOf(x){
        for(let i=0 ;i<this.ptr ; i++){
            if(this.stk[i]===x) return i;
        }
        return -1;
    }
    clear(){
        this.ptr=0;
    }
    size(){
        return this.ptr;
    }
    isEmpty(){
        return this.ptr<=0;
    }
    dump(){
        if(this.ptr<=0) return "" 
       return this.stk.join(", ");
    }

}

const stack = new Stack();


class DoubleStack{
    constructor(max){
        this.ptrA =0;
        this.ptrB =0;

        this.stk =[];
        this.max = max;
    }
    push(AorB,x){
      if(this.ptrA>=this.ptrB+1) throw "stack is full!";
    
        switch(AorB){
        }    
    }
    pop(){
        if(this.ptr<=0) throw "stack is empty!" 
        return this.stk[--this.ptr];
    }
    peek(){
        if(this.ptr<=0) throw "stack is empty!" 
        return this.stk[this.ptr-1];
    }
    indexOf(x){
        for(let i=0 ;i<this.ptr ; i++){
            if(this.stk[i]===x) return i;
        }
        return -1;
    }
    clear(){
        this.ptr=0;
    }
    size(){
        return this.ptr;
    }
    isEmpty(){
        return this.ptr<=0;
    }
    dump(){
        if(this.ptr<=0) return "" 
       return this.stk.join(", ");
    }

}