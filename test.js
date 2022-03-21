// "use strict";

// // function f(a, b) {
// //   alert(a + b);
// // }

// // Function.prototype.defer = function (ms) {
// //   let f = this;
// //   return function (...args) {
// //     setTimeout(() => f.call(this, ...args), ms);
// //   };
// // };

// // let user = {
// //   name: "John",
// //   sayHi() {
// //     alert(this.name);
// //   },
// // };
// // // f.defer(1000)(1, 2); // 1초 후 3을 출력
// // // user.sayHi = user.sayHi.defer(1000);
// // // user.sayHi();

// // // function slow(x, y) {
// // //   for (let i = 0; i < 100000; i++) {
// // //     for (let j = 0; j < 100000; j++) {
// // //       x * y * j;
// // //     }
// // //   }
// // //   return x + y;
// // // }

// // // function decorator(f) {
// // //   function inner() {
// // //     let res = f.apply(this, arguments);
// // //     return res;
// // //   }
// // //   return inner;
// // // }

// // // slow = decorator(slow);
// // // // alert(slow(1, 4));
// // // // alert(slow(1, 3));
// // // // alert(slow(1, 4));

// // // // alert(slow(2, 3));

// // // let date = {
// // //   name: "elly",
// // //   today: 20,
// // //   until(d) {
// // //     return this.today + d;
// // //   },
// // //   say(...blar2) {
// // //     return this.name + " : " + blar2;
// // //   },
// // // };

// // // date.say = decorator(date.say);

// // // alert(date.say(5, 3, 5));

// // const student = {
// //   name: "john",
// // };
// // const parent = {
// //   age: { today: 13 },
// //   name: "hey",
// // };
// // // student.callme();
// // let dictionary = Object.create(null);
// // let description = Object.defineProperty(dictionary, "toString", {
// //   value: function () {
// //     return Object.keys(this).toString();
// //   },
// // });
// // dictionary.apple = "Apple";
// // dictionary.__proto__ = "test"; // __proto__는 여기서 일반적인 프로퍼티 키입니다.

// // // __proto__는 여기서 일반적인 프로퍼티 키입니다.

// // for (let keys in dictionary) {
// //   console.log(keys);
// // }

// // // toString이 동작하는 부분입니다.

// // function Rabbit(name) {
// //   this.name = name;
// // }

// // Rabbit.prototype.sayHi = function () {
// //   alert(this.name);
// // };

// // class Test {
// //   constructor(name) {
// //     console.log("!");
// //   }
// //   me1() {}
// // }

// // console.log(String(Test.prototype.constructor));

// // class User {
// //   constructor(name) {
// //     this.name = "보라";
// //   }
// //   test = "elly";
// //   callName() {
// //     alert(this.name);
// //   }
// //   callTest() {
// //     alert(User.test);
// //   }
// // }

// // class Button {
// //   constructor(value) {
// //     this.value = value;
// //   }
// //   click = () => {
// //     console.log(this);
// //     alert(this.value);
// //   };
// //   click2() {
// //     alert(this.value);
// //   }
// // }

// // let button = new Button("안녕하세요.");

// // button.click();
// // button.click2();

// // // let f = button.click;
// // // setTimeout(() => {
// // //   f();
// // // }, 1000); // 안녕하세요.

// // let res = { a: 1, b: 2 }.length;
// // console.log(Object.keys(res));

// // function Clock2({ template }) {
// //   let timer;

// //   function render() {
// //     let date = new Date();

// //     let hours = date.getHours();
// //     if (hours < 10) hours = "0" + hours;

// //     let mins = date.getMinutes();
// //     if (mins < 10) mins = "0" + mins;

// //     let secs = date.getSeconds();
// //     if (secs < 10) secs = "0" + secs;

// //     let output = template
// //       .replace("h", hours)
// //       .replace("m", mins)
// //       .replace("s", secs);

// //     console.log(output);
// //   }

// //   this.stop = function () {
// //     clearInterval(timer);
// //   };

// //   this.start = function () {
// //     render();
// //     timer = setInterval(render, 1000);
// //   };
// // }

// // class Clock {
// //   callName() {
// //     alert(`${this.name} 이/가 멈췄습니다.`);
// //   }
// // }
// // let clock = new Clock("hey");

// // console.log(clock.callName());

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = "0" + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = "0" + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = "0" + secs;

//     let output = this.template
//       .replace("h", hours)
//       .replace("m", mins)
//       .replace("s", secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// /* 만드신 클래스는 아래와 같이 동작해야합니다. */
// class ExtendedClock extends Clock {
//   constructor({ template, a, precision = 1000 }) {
//     super({ template });
//     this.precision = precision;
//   }

//   start() {
//     super.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }
// /*

//     let lowResolutionClock = new ExtendedClock({
//       template: 'h:m:s',
//       precision: 10000
//     });

//     lowResolutionClock.start();
//   */
// let eventMixin = {
//   _eventHandlers: {},

//   on(eventName, handler) {
//     if (this._eventHandlers[eventName]) return;
//     else this._eventHandlers[eventName] = handler.bind(this);
//   },
//   off(eventName, handler) {
//     if (!this._eventHandlers[eventName]) return;
//     else delete this._eventHandlers[eventName];
//   },
//   trigger(eventName, ...data) {
//     if (!this._eventHandlers[eventName]) return;
//     else this._eventHandlers[eventName](...data);
//   },
// };

// class Menu {
//   choose(value) {
//     this.trigger("choose", value);
//   }
// }

// Object.assign(Menu.prototype, eventMixin);

// let menu = new Menu();
// menu.on("choose", (value) => alert(`선택된 값: ${value}`));

// menu.choose("123");
// menu.choose("ddd");
