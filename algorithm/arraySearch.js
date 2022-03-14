let arr =[1,42,34,2,33,17];

let result =LinearSearchKey2(arr ,arr.length , 2 );
let result2 =LinearSearchKey2(arr ,arr.length , 6);
console.log(result);
console.log(result2);


// Linear Search
function LinearSearchKey(arr , n, k){
	arr.push(k);
  let i=0;
	while (true){
		if(arr[i] == k ) break;
		i++;
	}
    return i===n ? -1 : i
}

// Linear Search
function LinearSearchKey2(arr , n, k){
	arr.push(k);
    let i =0;

    for( i ; ;i++){
        if(arr[i] == k ) break;
    }
    return i===n ? -1 : i
}

//Binary Search
let arr2 = [...arr].sort();


let result3 =binarySearchKey(arr2 ,arr2.length , 2 );
let result4 =binarySearchKey(arr2 ,arr2.length , 6);

function binarySearchKey(arr,n,k){
    let pl =0;
    let pr = n-1;
    while(pl<=pr){
        let pc = Math.floor((pr+pl)/2);
        if(arr[pc] ==k ) {
            return pc;
        }else if(arr[pc] < k){
            pl = pc+1;
        }else{
            pr = pc-1;
        }
    }
    return -1;
}

//Practice3_Q3
//
let saved=[]
let a= [1,9,2,9,4,6,7,9]
let resultn =seachIdx(a,a.length,9,saved)

function seachIdx(arr, n , k,savedArr){
    for(let i =0 ;i<n ; i++){
        if(arr[i] ==k) savedArr.push(i)
    }
    return savedArr.length

}
//Practice3_Q5
let b= [1,3,5,5,6,6,7,7,7,8,9,]

let resultk =binSeachIdx(b,b.length,7)
console.log("k : "+resultk)
function binSeachIdx(arr, n , k){
    let pl = 0;
    let pr = n-1;
    let idx ;
    while(pr>=pl){
        let pc = Math.floor((pr+pl)/2);
        if(arr[pc] ==k ) {
            idx = pc;
            pr = pc-1;
            pl = pc-1;
        }else if(arr[pc] < k){
            pl = pc+1;
        }else{
            pr = pc-1;
        }
    }
  
    return idx ? idx :-1;
}