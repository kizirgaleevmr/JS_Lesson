//Существует два варианта синтаксиса для создания пустого массива:
/*
let arr = new Array();
let arr = [];
*/

//В массиве могут храниться элементы любого типа.
let arr = [
  "Яблоко",
  { name: "Джон" },
  true,
  function () {
    alert("привет");
  },
];

//Получение последних элементов при помощи «at»
/*Другими словами, arr.at(i):

это ровно то же самое, что и arr[i], если i >= 0.
для отрицательных значений i, он отступает от конца массива.*/

//Методы pop/push, shift/unshift
/*
-shift удаляет элемент в начале, сдвигая очередь, так что второй элемент становится первым.
-unshift добавляет элемент в начале и возвращает длину массива
*/
//Методы, работающие с концом массива:
//-pop Удаляет последний элемент и возвращает его.
//push Добавляет элемент в конец массива:
let fruits = ["Яблоко", "Апельсин", "Груша"];
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.unshift("Груша"));
console.log(fruits.unshift("Груша2"));
console.log(fruits);

let arr2 = fruits;

console.log(arr2);
console.log(arr2.pop());
console.log(arr2.push("Киви"));
console.log(arr2);

let fruits2 = [];
fruits2["num"] = 5;
fruits2.push(23);
fruits2.push(3);
fruits2.unshift(21);
fruits2.unshift(4);
fruits2.age = 38;
console.log(fruits2);

console.group("for in");
let arr3 = [
  "Яблоко",
  { age: 25 },
  function () {
    console.log("hi");
  },
  "груша",
];

for (let el in arr3) {
  console.log(arr3[el]);
}
console.groupEnd();

console.group("lenfth");

let fruits3 = [];
fruits3[123] = "Яблоко";
console.log(fruits3.length);

for (let el of fruits3) {
  if (typeof el != "undefined") {
    console.log(el);
  }
}
console.groupEnd();

let arr4 = [1, 2, 3, 4, 5, 6];

arr4.length = 2;

let arrNew = new Array(3);

console.log(arrNew);

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(String(arr4) === "1,2");
console.log(matrix[1][2]);

console.log([] + 1); //'' + 1
console.log([1] + 1); // '1' + 1
console.log([1, 2] + 1); // '1,2' + 1

let arr7 = [];
let arr8 = arr7;

let style = [];

style.unshift("Джаз", "Блюз");

style.push("Рок-н-ролл");
style[1] = "Классика";
console.log(style.shift());
style.unshift("Рэп", "Регги");
console.log(style);

let arr1 = [10, 2, 3, 4, 5, 6];

function sumInput() {
  let arr = [];
  let num = "";
  let res = 0;
  do {
    num = prompt("Введите число", 0);
    if (!isFinite(num) || num === "" || num === null) break;
    arr.push(+num);
  } while (num != null);

  for (let el of arr) {
    res += Number(el);
  }
  console.log(arr);
  console.log("res = " + res);
}
sumInput();

// function sumInput() {
//   let numbers = [];
//   while (true) {
//     let value = prompt("число", 0);

//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum + " " + numbers;
// }

// console.log(sumInput());
/*Медленное решение
Можно посчитать все возможные подсуммы.

Самый простой путь – посчитать суммы подмассивов, начиная с каждого элемента по очереди.

Например, для [-1, 2, 3, -9, 11]:*/

function maxSubSum(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }
  return maxSum;
}

/*Быстрое решение
Идём по массиву и накапливаем текущую частичную сумму элементов в переменной s. Если s в какой-то момент становится отрицательной – присваиваем s=0. Максимальный из всех s и будет ответом.

Если объяснение недостаточно понятно, посмотрите на код, он вполне лаконичен:*/

let arrN = [20, -2, 3, 4, -9, 10];

function getMaxSubSum(arr) {
  let sumFixedStart = 0;
  let maxSum = 0;

  for (let item of arr) {
    sumFixedStart += item;
    maxSum = Math.max(maxSum, sumFixedStart);
    if (sumFixedStart < 0) sumFixedStart = 0;
  }
  return maxSum;
}
alert(maxSubSum([-1, 2, 20, -9, 3]));
