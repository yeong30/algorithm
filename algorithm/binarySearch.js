// 이진탐색
/*
정렬된 배열을 대상으로 순환탐색 
1. 분할 : 전체 배열의 가운데 인덱스를 추출하여 탐색키와 동일한지 비교//O(1)
2. 정복 : 탐색키와 가운데원소를 비교하며 탐색키가 크면 왼쪽 부분배열을 대상으로 이진탐색 순환 호출, 탐색키가 작으면 오른쪽 부분배열을 대상으로 이진탐색 순환 호출
    최대 분할 횟수  n,n/2,n/4... n/2^k = 1(최대호출시 마지막배열원소는 무조건 1개)   => k = logN;
    O(log N)
3. 결합 : 없음 

시간복잡도 : O(log N)


순환탐색은 메모리를 많이 차지하므로 반복검색을 사용하는것이 더 효율적
*/
function binarySearch(arr, n, key){

    let pf = 0;
    let pl = n-1;
    while(pf<=pl){
        let mid = Math.floor((pl+pf)/2);
        if(arr[mid]===key) {
            return mid; 
        }else if(arr[mid]>key) {
            pl = mid - 1;
        }else if(arr[mid]<key) {
            pf = mid + 1;

        }

    }
    return -1;
}
let arr =[1,5,7,9,12,17,45,99];
console.log(binarySearch(arr,arr.length,99));