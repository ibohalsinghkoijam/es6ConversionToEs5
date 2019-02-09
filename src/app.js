// const rxjs = require('rxjs');

// const o = rxjs
//   .Observable
//   .fromPromise((async () => {
//     return await 'hi';
//   })());
// o.subscribe((r) => console.log(r));

// const p = rxjs
//   .Observable
//   .fromPromise((async () => {
//     return await Promise.resolve('hi');
//   })());
// p.subscribe((r) => console.log(r));

/******** 3 ********/
// import { Observable } from 'rxjs/Observable';

// var observable = Observable.create((observer) => {
//     observer.next('Hey guys!')
// })

/******** 1 ********/
let nums = [1, 2, 3];
let doubleNums = nums.map((e) => e * 2);

/******** 2 ********/
// export class Rectangle {
    
//     constructor(height, width) {
//       this.height = height;
//       this.width = width;
//     }

//     //Getter
//     get area() {
//         return this.calArea();
//     }

//     //Method
//     calArea() {
//         var height = 2;
//         var width = 2;
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 20);
// console.log(square.are)

