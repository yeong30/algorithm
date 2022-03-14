class Queue {
  constructor(max) {
    this.max = max;
    this.front = 0;
    this.rear = 0;
    this.que = [];
    this.num = 0;
  }
  enque(x) {
    if (this.num >= this.max) throw "que is full!";
    this.que[this.rear++] = x;
    if (this.rear >= this.max) this.rear = 0;
    this.num++;
  }
  deque() {
    if (this.num <= 0) throw "que is empty!";
    this.num--;
    let res = this.que[this.front++];
    if (this.front >= this.max) this.front = 0;
    return res;
  }
  indexOf(x) {
    for (let i = 0; i < this.num; i++) {
      let idx = i + (this.front % this.max);
      if (this.que[idx] == x) return idx;
    }
    return -1;
  }
  peek() {
    return this.que[this.front];
  }
  clear() {
    this.num = this.front = this.rear = 0;
  }
  capacity() {
    return this.max;
  }
  size() {
    return this.num;
  }
  isEmpty() {
    return this.num <= 0;
  }
  dump() {
    if (this.num <= 0) document.write("데이터가 없습니다!   ");
    document.write("현재 총 데이터 :    ");

    for (let i = 0; i < this.num; i++) {
      let idx = i + (this.front % this.max);
      document.write(this.que[idx] + ",");
    }
    document.write("<br/>");
  }
  search(x) {
    if (this.num <= 0) return 0;
    for (let i = 0; i < this.num; i++) {
      let idx = (i + this.front) % this.max;
      if (this.que[idx] == x) return i + 1;
    }
    return 0;
  }
}

function queueTester() {
  let x;
  const s = new Deck(64);
  let flag = true;
  while (flag) {
    let answer = +prompt(`현재 데이터 수 : ${s.size()} / ${s.capacity()}
    enqueFront : 1  , enqueRear  : 2  , dequeFront : 3 , dequeRear  : 4 , peek  : 5,   dump: 6,
    `);

    switch (answer) {
      case 1:
        document.write("front로 인큐할 데이터 :    ");
        x = +prompt(`데이터를 입력하세여`);
        document.write(" " + x);
        document.write("<br/>");

        s.enqueFront(x);
        break;
      case 2:
        document.write("rear로 인큐할 데이터 :    ");
        x = +prompt(`데이터를 입력하세여`);
        document.write(" " + x);
        document.write("<br/>");

        try {
          s.enqueRear(x);
        } catch (error) {
          alert(error);
        }
        break;
      case 3:
        try {
          x = s.dequeFront();
          document.write("fromt에서 디큐한 데이터 :    " + x);
          document.write("<br/>");
        } catch (error) {
          alert(error);
        }
        break;
      case 4:
        try {
          x = s.dequeRear();
          document.write("rear에서 디큐한 데이터 :    " + x);
          document.write("<br/>");
        } catch (error) {
          alert(error);
        }
        break;
      case 5:
        try {
          x = s.peek();
          document.write("현재 peek :    " + x);
          document.write("<br/>");
        } catch (error) {
          alert(error);
        }
        break;
      case 6:
        try {
          x = s.dump();
          document.write("<br/>");
        } catch (error) {
          alert(error);
        }
        break;
      default:
        flag = false;
        break;
    }
  }
}

class Deck {
  constructor(max) {
    this.max = max;
    this.front = 0;
    this.rear = 0;
    this.que = [];
    this.num = 0;
  }

  enqueFront(x) {
    if (this.num >= this.max) throw "que is full!";
    this.num++;
    if (--this.front < 0) this.front = this.max - 1;
    this.que[this.front] = x;
    return x;
  }
  dequeFront() {
    if (this.num <= 0) throw "que is empty!";

    this.num--;
    let res = this.que[this.front];
    ++this.front;
    if (this.front >= this.max) this.front = 0;
    return res;
  }

  enqueRear(x) {
    if (this.num >= this.max) throw "que is full!";

    this.num++;

    this.que[this.rear++] = x;

    if (this.rear >= this.max) this.rear = 0;
    return x;
  }
  dequeRear() {
    if (this.num <= 0) throw "que is empty!";

    this.num--;
    if (--this.rear < 0) this.rear = this.max - 1;
    let res = this.que[this.rear];
    return res;
  }
  dump() {
    document.write("현재 총 데이터 :    ");
    for (let i = 0; i < this.num; i++) {
      let idx = (i + this.front) % this.max;
      document.write(this.que[idx] + ",");
    }
    document.write("<br/>");
  }
  peek() {
    return this.que[this.front];
  }
  size() {
    return this.num;
  }
  capacity() {
    return this.max;
  }
}

queueTester();
