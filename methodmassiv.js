// // push pop shift inshift
// let arr = ["Я", "изучаю", "JavaScript"];
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.unshift("home"));
// console.log(arr.push("home"));
// console.log(arr);

// // splice
// //Метод arr.splice(str) – это универсальный «швейцарский нож» для работы с массивами. Умеет всё: добавлять, удалять и заменять элементы.

// let array = new Array(
//   ["Я", "изучаю", "JavaScropt"],
//   ["Я", "изучаю", "JavaScropt"]
// );
// array.splice(1, 1, ["marsel"], [1, 2, 3, 6]);
// array[0].splice(0, 1, "my name");
// console.log(array);

// //slice возращает новый массив, в который копирует все элементы с индекса start до end

// console.log(array.slice(0, 1));

// //concat Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

// //arr.concat(arg1, arg2...)

// //создать массив из array и [3,4]

// let array1 = array.concat([3, 4, 7], [5, 6], 8, 9);
// console.log(array1);

// //Обычно он копирует только элементы из массивов. Другие объекты, даже если они выглядят как массивы, добавляются как есть:

// let arrayLike = {
//   0: "что-то",
//   1: "еще",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2,
// };

// let res = array.concat(arrayLike);

// console.log(res);

// //Перебор forEach
// /*	arr.forEach(function(item, index, array) {
//   	// ... делать что-то с item
// 	});
// */
// ["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, arr) =>
//   console.log(item + ` ${index}` + ` сам массив: ${arr}`)
// );
// let arrObj = [{ id: 1, name: "Marsel", age: 38 }, [1, 2, 3, 4, 5, 6, 7, 8, 9]];

// for (let key of arrObj) {
//   console.log(key);
// }

// //Поиск в массиве
// //indexOf lastIndexOf includes

// let arrOne = [1, 0, false];
// console.log(arrOne.indexOf(0));
// console.log(arrOne.indexOf(1));
// console.log(arrOne.indexOf(false));

// // includes - Метод includes правильно брабатывает NaN
// console.log(arrOne.includes(false));

// // lastIndex
// let fruits = ["Яблоко", "Апельсин", "Яблоко"];
// console.log(fruits.lastIndexOf("Яблоко"));

// //find   findIndex findLastIndex
// //Представьте, что у нас есть массив объектов. Как нам найти объект с определённым условием?
// //Здесь пригодится метод arr.find.
// //let result = arr.find(function(item, index, array)

// //Если функция возвращает true, поиск прерывается и возвращается item. Если ничего не найдено, возвращается undefined.

// let users = [
//   { id: 1, name: "Вася" },
//   { id: 2, name: "Петя" },
//   { id: 3, name: "маша" },
//   { id: 4, name: "Вася" },
// ];

// let user = users.find((item) => item.name == "Вася");
// console.log(user);

// // filter
// // Если найденных элементов может быть много, можно использовать arr.filter(fn).
// //возвращает массив из всех подходящих элементов:
// let userOne = users.filter((item) => item.name == "Вася");
// let userTwo = users.filter((item) => item.id > 1);
// console.log(userOne);
// console.log(userTwo);

// // Преобразование массива
// // map
// // Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.

// // let result = arr.map(function(item, index, array) {
// // возвращается новое значение вместо элемента
// // });

// let lengths = ["Бильбо", "Гэндальф", "Назгул"].map((item) => item.length);

// console.log(lengths);

// // sort(fn)
// // Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.

// let arrSort = [1, 15, 2, 12];

// //arrSort.sort((a, b) => a - b);

// function mySort(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// arrSort.sort(mySort);

// console.log(arrSort);

// // reverse
// // Метод arr.reverse меняет порядок элементов в arr на обратный.

// let arrNew = arrSort.reverse();

// console.log(arrNew);

// // split join
// // Ситуация из реальной жизни. Мы пишем приложение для обмена сообщениями, и посетитель вводит имена тех, кому его отправить, через запятую: Вася, Петя, Маша. Но нам-то гораздо удобнее работать с массивом имён, чем с одной строкой. Как его получить?
// // Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim.

// // У метода split есть необязательный второй числовой аргумент – ограничение на количество элементов в массиве. Если их больше, чем указано, то остаток массива будет отброшен.
// let names = "Вася, Петя, Маша";

// //let arrTwo = names.split(", ", 2); второй необязательный аргумент
// let arrTwo = names.split(", ");

// for (let name of arrTwo) {
//   console.log(`Сообщение получать: ${name}.`);
// }

// // Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.

// let str = arrTwo.join("; ");

// console.log(str);

// // reduce/reduceRight
// // Когда нам нужно перебрать массив – мы можем использовать forEach, for или for..of.
// // Когда нам нужно перебрать массив и вернуть данные для каждого элемента – мы можем использовать map.

// // let value = arr.reduce(function(accumulator, item, index, array) {
// //   // ...
// // }, [initial]);
// /*
// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((acc, item) => acc + item, 0);

// alert(result); // 15
// */

// // Array.isArray
// // Поэтому typeof не может отличить простой объект от массива:
// // …Но массивы используются настолько часто, что для этого придумали специальный метод: Array.isArray(value). Он возвращает true, если value массив, и false, если нет.

// document.write("<h3>Array.isArray</h3>");
// document.write(Array.isArray({}) + "<br>"); // false
// document.write(Array.isArray([])); // true

// // Большинство методов поддерживают «thisArg»
// // Почти все методы массива, которые вызывают функции – такие как find, filter, map, за исключением метода sort, принимают необязательный параметр thisArg.

// let army1 = {
//   minAge: 23,
//   maxAge: 26,
// };

// let army = {
//   minAge: 15,
//   maxAge: 26,
// };

// function canJoin(user) {
//   return user.age >= this.minAge && user.age < this.maxAge;
// }
// let users1 = [{ age: 16 }, { age: 20 }, { age: 25 }, { age: 26 }, { age: 30 }];

// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users1.filter(canJoin, army);

// console.log(soldiers);

// Переведите текст вида border-left-width в borderLeftWidth

let strOne = "background-color-list-style-image-webkit-transition";
function camelize(str) {
  const split = str.split("-").map((item, index) => {
    return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
  });
  return split.join("");
}
console.log(camelize(strOne));

// const arrLyak = {
//   0: "тут текст 1",
//   1: "тут текст 2",
//   2: "тут текст 3",
//   3: "тут текст 4",
//   [Symbol.isConcatSpreadable]: true,
//   length: 3,
// };
// const arr3 = [1, 2, 3];
// const conArr = arr3.concat(arrLyak);
// console.log(conArr);

//Фильтрация по диапазону
let arr2 = [5, 3, 8, 1, 4, 2, -5, 3];
//filter
function filterRange(arr, a, b) {
  return (arr = arr.filter((elem) => elem >= a && elem <= b));
}
console.log(filterRange(arr2, 1, 4));

//let arr2 = [5, 3, 8, 1, 4, 2];
//Фильтрация по диапазону "на месте"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
//filterRangeInPlace(arr2, 2, 4);
console.log(arr2);

//Сортировать в порядке по убыванию
console.log(arr2.sort((a, b) => a - b));

//splice добавляет удаляет заменяет
//slice вырезает возращает массив
//indexOf includes lastIndexOf

const arr5 = [
  [5, 2, 1, -10, 8],
  { id: 1, name: "John", age: 18 },
  [2, 6, 8],
  { id: 2, name: "marsel", age: 38 },
  { id: 3, name: "John", age: 20 },
  [2, 6, 8],
  { id: 4, name: "John", age: 15 },
];

for (let i = 0; i < arr5.length; i++) {
  if (Array.isArray(arr5[i])) {
    arr5.splice(i, 1);
    i--;
  }
}
// for (let i = 0; i < arr5.length; i++) {
//   arr5[i].push(5, 5, 5);
//   arr5[i].unshift(3, 3, 3);
// }
const newPeople = arr5.filter((person) => person.id > 2);
const newPeople1 = arr5.find((item) => item.age < 25);
//console.log(newPeople1);

// найти пользователей, для которых army.canJoin возвращает true

//Скопировать и отсортировать массив
let arrText = ["HTML", "JavaScript", "CSS"];
function copySorted(str) {
  return (str = str.slice().sort());
}
let sorted = copySorted(arrText);
console.log(arrText);
console.log(sorted);

//Создать расширяемый калькулятор
// 3 + 7

function Calculator() {
  this.method = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let res = "";
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    return this.method[op](a, b);
  };

  this.addMethod = function (name, func) {
    return (this.method[name] = func);
  };
}

let powerCalc = new Calculator();

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

const calc = new Calculator();

console.log(powerCalc.calculate("27 / 3"));

//Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];

// resultName = users.map((item) => item.name);
// console.log(resultName);

//Трансформировать в объекты

let vasya = { name: "Вася", surname: "Пупкин", age: 15, id: 1 };
let petya = { name: "Петя", surname: "Иванов", age: 40, id: 2 };
let masha = { name: "Маша", surname: "Петрова", age: 32, id: 3 };
let olya = { name: "Оля", surname: "Васильева", age: 100, id: 4 };

let users = [vasya, petya, masha, olya];

let usersMapped = users.map((item) => {
  return {
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
  };
});
console.log(usersMapped[0].fullName);
console.log(usersMapped[0].id);

//Отсортировать пользователей по возрасту

function sortByAge(arr) {
  //arr.sort((a, b) => a.age - b.age);
  arr.sort((a, b) => (a.age > b.age ? 1 : -1));
}

//sortByAge(users);
console.log(users);

//Перемешайте массив
let arr1 = [1, 2, 3];
function shufle(arr) {
  console.log(arr.sort(() => Math.random() - 0.5));
}
shufle(arr1);

//Получить средний возраст
function getAverageAge(arr) {
  let result = arr.reduce((acc, item) => acc + item.age, 0);
  return (result = Math.round(result / arr.length));
}
console.log(getAverageAge(users));

//Оставить уникальные элементы массива

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

function unique(str) {
  let resultUnq = [];

  str.forEach((el) => {
    if (!resultUnq.includes(el)) {
      resultUnq.push(el);
    }
  });
  return resultUnq;
}
console.log(unique(strings));

let users2 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
  { id: "pete", name: "Pete Peterson", age: 31 },
  { id: "pete", name: "Pete Peterson", age: 31 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

// let redVal = users2.reduce((acc, item) => {
//   acc[item.id] = item;
//   return acc;
// }, {});
function groupById(users) {
  let objNew = {};

  users.forEach((el) => {
    objNew[el.id] = el;
  });
  return objNew;
}
console.log(groupById(users2));

let table = `
<table id="table">
        <caption style="text-align: right">
          Таблица № 1
        </caption>
        <tr>
          <th>Название №1</th>
          <th>Название №2</th>
          <th>Название №3</th>
          <th>Название №4</th>
          <th>Название №5</th>
        </tr>
        `;

let createTable = document.querySelector(".selOut");

users2.forEach((el) => {
  table += `<tr>
  <td>${el.id}</td>
  <td>${el.name}</td>
  <td>${el.age}</td>
  <td>empty</td>
  <td>empty</td>
  </tr>`;
});

createTable.insertAdjacentHTML("beforeend", table);
