//Переведите текст вида border-left-width в borderLeftWidth

// let str = "background-color-list-style-image";

// function camelize(str) {
//   let split = str.split("-");

//   let arr = split.map((element, index) => {
//     return index == 0 ? element : element[0].toUpperCase() + element.slice(1);
//   });
//   return arr.join(" ");
// }
// console.log(camelize(str));

//Фильтрация по диапазону

// let arr = [5, 3, 8, 1, 6, 8, 66];

// function filterRange(arr, a, b) {
//   return arr.filter((item) => {
//     return item >= a && item <= b;
//   });
// }

// console.log(filterRange(arr, 1, 6));

//Фильтрация по диапазону "на месте"

// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// filterRangeInPlace(arr, 1, 2);

// console.log(arr);

//Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => a - b);
// console.log(arr);

//Скопировать и отсортировать массив

// let arr = ["HTML", "JavaScript", "CSS"];

// function copySorted(arr) {
//   return arr.slice().sort();
// }
// const sorted = copySorted(arr);
// console.log(sorted);

//Создать расширяемый калькулятор
//"3 + 7"

// function Calculator() {
//   this.method = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   };

//   this.calculator = function (str) {
//     let split = str.split(" "),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];
//     return this.method[op](a, b);
//   };
//   this.addMethod = function (name, func) {
//     return (this.method[name] = func);
//   };
// }
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// console.log(powerCalc.calculator("27 / 9"));
// console.log(powerCalc.method["+"](5, 78));
// console.log(powerCalc.method["-"](5, 78));
// console.log(powerCalc.method["*"](5, 7));
// console.log(powerCalc.calculator("6 + 3"));

//Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((el) => {
//   return `name: ${el.name}`;
// });

// console.log(names);

//Трансформировать в объекты
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((el) => ({
//   fullName: `${el.name} ${el.surname}`,
//   id: `${el.id}`,
// }));

// console.log(usersMapped[0].fullName);

//Отсортировать пользователей по возрасту

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(users) {
//   return arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// }

//Перемешайте массив

// let arr = [1, 2, 3];
// function shuffle(arr) {
//   return arr.sort(() => Math.random() - 0.5);
// }

//console.log(shuffle(arr));

let arrayLike = {
  0: "Hello",
  1: "World",
  2: 38,
  3: 38,
  length: 4,
};

let ar4 = {
  from: 0,
  to: 10,

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
// let arr = Array.from(arrayLike);
//console.log(arr);

// let arr = Array.from(ar4);
// console.log(arr);

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// let usersById = groupById(users);

// function groupById(array) {
//   return array.reduce((obj, value) => {
//     obj[value.id] = value;
//     return obj;
//   }, {});
// }

// console.log(usersById);
