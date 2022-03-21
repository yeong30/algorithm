import { Stack } from "../dataStructure/stack.js";
/**
 * 하노이의 탑 알고리즘
 hanoi(n: 옮기려는 층의 수 , x:처음 위치 , y"옮기려는 위치)

 기본 알고리즘은 n개의 층을 y로 옮기기 위해서는 마지막층을 제외한 n-1 개의 층을 그룹지어 중간위치로 옮겨야한다.
 그리고 다시 n-1 개의 층을 중간위치로 옮겨놓기 위해서는 n-2개의층을 최종위치로 옮겨야한다.

이러한 알고리즘이 반복되어 n==1일때까지 반복해서 옮기면된다.
 */
function hanoi(n, x, y) {
  // n=5
  //n=4 >

  if (n > 1) {
    hanoi(n - 1, x, 6 - y - x);
  }
  console.log(`${n}번의 X :${x} ,y : ${y} , mid: ${6 - y - x}`);
  document.write(`${n}번 기둥을 ${x}에서 ${y}로 이동`);
  console.log(`${n}번의 X :${x} ,y : ${y} , mid: ${6 - y - x}`);

  document.write(`<br/>`);

  if (n > 1) {
    hanoi(n - 1, 6 - y - x, y);
  }
}
// hanoi(3, 1, 3);

// 기둥목록
function move(n, curr, target) {
  let tempPlace = 6 - curr - target;
  if (n > 1) {
    move(n - 1, curr, tempPlace);
  }
  document.write(
    `${n}번 원반을 ${pillar[curr - 1]}에서 ${pillar[target - 1]}로 이동<br/>`
  );
  if (n > 1) {
    move(n - 1, tempPlace, target);
  }
}
let pillar = ["A 기둥", "B기둥", "C기둥"];

function move_2(n, curr, target) {
  const stk = new Stack(10);
  const stkCurr = new Stack(10);
  const stkTarget = new Stack(10);
  const stepStk = new Stack(10);
  let step = 0;

  while (true) {
    console.log("loop");
    if (step == 0 && n > 1) {
      stk.push(n);
      stkCurr.push(curr);
      stkTarget.push(target);
      stepStk.push(step);
      target = 6 - curr - target;
      n--;
      continue;
    }
    log(n, curr, target);

    if (!stk.isEmpty()) {
      n = stk.pop();
      target = stkTarget.pop();
      curr = stkCurr.pop();
      step = stepStk.pop() + 1;
      if (step == 1 && n > 1) {
        log(n, curr, target);
        step = 2;
        n--;
        curr = 6 - curr - target;
        console.log(`current1 > ${n} ${curr} ${target}`);
        continue;
      }
    }

    console.log(`current 2> ${n} ${curr} ${target}`);
    if (stk.isEmpty()) break;
  }
}
function log(n, from, to) {
  console.log(`currentlog  > ${n} ${from} ${to}`);

  console.log(
    `${n}번 원반을 ${pillar[from - 1]}에서 ${pillar[to - 1]}로 이동<br/>`
  );
}
// move_2(3, 1, 3);
let pos_1 = [];
function set_1(i) {
  for (let j = 0; j < 8; j++) {
    pos[i] = j;
    if (i == 3) {
      console.log(pos);
    } else {
      set(i + 1);
    }
    console.log("end " + pos);
  }
}

function set_2(i, max) {
  for (let j = 0; j < max; j++) {
    if (!flag[j]) {
      pos[i] = j;
      flag[j] = true;
      if (i == max - 1) {
        console.log(pos);
      } else {
        set(i + 1, max);
      }
      flag[j] = false;
    }
  }
}
let pos = [];
let flag_a = []; //j
let flag_b = []; //i j
let flag_c = []; //10+ i+ j
let count = 0;

function set(i, max = 8) {
  for (let j = 0; j < max; j++) {
    if (!flag_a[j] && !flag_b[i + j] && !flag_c[i - j + 10]) {
      pos[i] = j;
      flag_a[j] = true;
      flag_b[i + j] = true;
      flag_c[i - j + 10] = true;

      if (i == max - 1) {
        console.log(pos);
        count++;
      } else {
        set(i + 1, max);
      }
      flag_a[j] = false;
      flag_b[i + j] = false;
      flag_c[i - j + 10] = false;
    }
  }
}

set(0);

function set_loop(i, max = 8) {
  const stkC = new Stack(10);
  while (true) {
    stkC.push(i);
  }
}
