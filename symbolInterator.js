let range = {
  from: 0,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

for (let num of range) {
  console.log(num);
}

let str = "Hello hjjl";

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
}
// Array.from принимает итерируемый объект или псевдомассив
let arrayLike = {
  0: "Hello",
  1: "World",
  2: 38,
  3: 38,
  length: 4,
};

let arrayLike1 = {
  name: "marsel",
};
// let arr = Array.from(arrayLike);
//console.log(arr);

let arr = Array.from(range, (num) => num * num);
console.log(arr);
