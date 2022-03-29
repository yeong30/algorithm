// 버블정렬

class BubbleSort {
  constructor(arr) {
    this.arr = arr;
  }
  //   가장 오른쪽부터 수행
  //   bubbleSort() {
  //     let n = this.arr.length;
  //     for (let i = 0; i < n; i++) {
  //       for (let j = n - 1; j > i; j--) {
  //         if (this.arr[j] < this.arr[j - 1]) this.swap(j, j - 1);
  //       }
  //     }
  //   }

  /* 가장 왼쪽부터 수행*/
  //   bubbleSort() {
  //     let n = this.arr.length;
  //     for (let i = n-1; i > 0; i--) {
  //       for (let j = 0; j < i; j++) {
  //         //   i =1 , n = 10 , j = 0 ~ 7
  //         if (this.arr[j] > this.arr[j + 1]) this.swap(j, j + 1);
  //       }
  //     }
  //     this.endAlarm();
  //   }

  // 교환과정을 출력하는 프로그램
  //   bubbleSort() {
  //     let n = this.arr.length;
  //     for (let i = 0; i < n; i++) {
  //       document.write(`패스(${i + 1}) : <br/>`);
  //       for (let j = n - 1; j > i; j--) {
  //         //   i =1 , n = 10 , j = 0 ~ 7
  //         this.print(j - 1);
  //         if (this.arr[j] < this.arr[j - 1]) this.swap(j, j - 1);
  //       }
  //       this.print();
  //     }
  //     // this.endAlarm();
  //   }
  /**알고리즘 개선 */
  //   bubbleSort() {
  //     let n = this.arr.length;
  //     let k = 0;
  //     for (let i = 0; i < n; i++) {
  //       let last = n - 1;
  //       document.write(`패스(${i + 1}) : <br/>`);
  //       for (let j = n - 1; j > k; j--) {
  //         this.print(j - 1);
  //         if (this.arr[j] < this.arr[j - 1]) {
  //           this.swap(j, j - 1);
  //           last = j;
  //         }
  //       }
  //       k = last;
  //       this.print();
  //       if (k === n - 1) break;
  //     }
  //   }
  /**양방향 버블솔트 */
  // [9,1,2,3,4,5,6,7,8]
  // 패스가 홀수번째일때는 가장 작은값을 앞으로 , 패스가 짝수일때는 가장 큰값을 뒤로
  bubbleSort() {
    let n = this.arr.length;
    let oddK = 0;
    let evenK = n - 1;

    for (let i = 0; i < n; i++) {
      let last = n - 1;
      document.write(`패스(${i + 1}) : <br/>`);
      if ((i + 1) % 2 !== 0) {
        for (let j = evenK; j > oddK; j--) {
          this.print(j - 1);
          if (this.arr[j] < this.arr[j - 1]) {
            this.swap(j, j - 1);
            last = j;
          }
        }
        oddK = last;
      } else {
        let last = 0;
        for (let j = oddK; j < evenK; j++) {
          this.print(j);
          if (this.arr[j] > this.arr[j + 1]) {
            this.swap(j, j + 1);
            last = j;
          }
        }
        evenK = last;
      }
      if (evenK === 0 && oddK === n - 1) break;
      this.print();
    }
  }

  swap(a, b) {
    let temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  }
  endAlarm() {
    alert("sort end!  \n >> " + this.arr.join(", "));
  }
  print(idx = 100) {
    for (let i = 0; i < this.arr.length; i++) {
      document.write(` ${this.arr[i]} `);
      if (idx === i)
        this.arr[idx] > this.arr[idx + 1]
          ? document.write(`+`)
          : document.write(`-`);
    }
    document.write(` <br/> `);
  }
}

let arr = [9, 1, 2, 3, 4, 5, 6, 7, 8];
const sort = new BubbleSort(arr);
sort.bubbleSort();
