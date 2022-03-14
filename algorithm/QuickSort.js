//퀵정렬
/* 

특정 원소(pivot)을 기준으로 배열을 분할하고 각 부분배열에 대해 다시 퀵정렬을적용하는 방식

pivot :  주어진 배열을 두 부분배열로 분할할때 기준이 되는 요소(일반적으로 첫번째 원소사용)

* 퀵정렬은 피벗이 제자리를 잡도록하는 정렬방식이다.

1. 분할 : 제자리를 잡은 피벗을 기준으로 주어진 배열을 두 부분배열로 분할
2. 정복 : 두 부분배열에 대해 퀵정렬을 순환적으로 적용하여 정렬
3. 결합 : 정렬한 부분배열들을 하나의 배열로 결합

각 피벗이 제자리를 잡을 때 분할함수(partition)이 호출되고 한번 호출이 종료되면 다시 두개의 부분배열에 퀵정렬이 실행된다.

분할함수
 - 양쪽 top, bottom에서 각각 pivot보다 큰값, 작은값을 찾는다.
 left가 피벗보다 크며 right가 피벗보다 작을때 양쪽 값을 교환한다.
 left 와 right가 교차될때 right와 피벗을 교환하고 함수가 종료된다.

*/
let arr =[100,88,7,9,126,17,45,3,99];

let total = quickSort(arr);

function quickSort(arr){
    if(arr.length <2) {
        return  arr;
    }
let [A,pivot,B] = partition(arr);
return quickSort(A).concat(pivot,...quickSort(B))
}

function partition(arr ){
    let pivot = arr[0];
    let left = [];
    let right = [];
    
    for(let i =1; i<arr.length;i++){
        if(arr[i]>pivot){
            right.push(arr[i])
        }else if(arr[i]<pivot){
            left.push(arr[i])
        }
    }
    return [left,pivot,right]

}