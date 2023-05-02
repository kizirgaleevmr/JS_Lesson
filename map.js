// function Constr(name, age, work) {
//   this.name = name;
//   this.age = age;
//   this.work = work;
// }

// const user = new Constr("marsel", 38, true);
// const user2 = new Constr("john", 35, false);
// const user3 = new Constr("Masha", 28, true);

// console.log(user);

// const arrObj = [user, user2, user3, user2, user3];

// $table = "<table class='tb'><tr><th>1</th><th>2</th><th>3</th></tr>";
// $tableContent = "";
// arrObj.forEach((el) => {
//   $tableContent += "<tr>";
//   for (let key in el) {
//     $tableContent += `
//      <td>${el[key]}</td>
//     `;
//   }
//   $tableContent += "</tr>";
// });
// $table += $tableContent + "<table>";

// document.getElementById("btn").onclick = function () {
//   document.querySelector(".content").innerHTML = $table;
// };

// document.getElementById("btn1").onclick = function () {
//   document.querySelector(".tb").hidden = true;
// };

// const map = new Map();

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");

// let john = { name: "John" };
// let ben = { name: "ban" };

// let visitsCountObj = {};
// let visitsCountMap = new Map();

// visitsCountObj[ben] = 333;
// visitsCountMap.set(john, 123);

// Перебор Map
// Для перебора коллекции Map есть 3 метода:
// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук", 50],
// ]);

// console.log(recipeMap.entries());

// перебор по ключам (овощи)

// for (let key of recipeMap.keys()) {
//   console.log(key);
// }

// перебор по значениям (числа)

// for (let key of recipeMap.values()) {
//   console.log(key);
// }

// перебор по элементам в формате [ключ, значение]

// for (let key of recipeMap.entries()) {
//   console.log(key);
// }

// recipeMap.forEach((value, key) => {
//   console.log(value + "-" + key);
// });

// console.group();
// console.log(Object.entries(user2));

//Object.entries: Map из Object
// let map2 = new Map(Object.entries(user2)); //получаем коллекцию
// console.log(map2.get("name"));

// Object.fromEntries: Object из Map

// let price = Object.fromEntries(map2); // получаем объект
// console.log(price);

//Set
// Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// let set = new Set(Object.entries(user2));

// for (let key of set) {
//   console.log(key);
// }
// for (let key of set.values()) {
//   console.log(key);
// }
// console.log(set);
// let arr2 = [1, 2, 3];
// let arr3 = [1, 2, 3];
// console.log(Array.from(map2.values()));
// console.groupEnd();
// Фильтрация уникальных элементов массива
// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];
// let set2 = new Set(values);
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(unique(values));

//Отфильтруйте анаграммы

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// let arrLower = arr.map((el) => {
//   return el.toLowerCase();
// });

// let map1 = new Map();

// console.log(arrLower);

// let arrSort = [];

// for (let i = 0; i < arrLower.length; i++) {
//   let innerArray = arrLower[i]; //nap
//   arrSort[i] = [];
//   for (let j = 0; j < innerArray.length; j++) {
//     //arrSort[i].push(innerArray[j]);
//     arrSort[i][j] = innerArray[j];
//   }
// }
// let se2 = new Set();
// arrSort.forEach((element) => {
//   se2.add(element.sort().join(""));
// });
// console.log(se2);

// function unique(arr) {
//   let map = new Map();
//   let sorted;
//   for (let word of arr) {
//     sorted = word.toLowerCase().split("").sort().join("");
//     map.set(sorted, word);
//   }

//   console.log(Array.from(map.keys()));
// }
// unique(arr);

// Перебираемые ключи

// let map = new Map();
// let set = new Set();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// keys.push("more");
// keys.push("more");
// keys.push("more");
// keys.push("more2");

// keys.forEach((el) => {
//   set.add(el);
// });
// console.log(set);
