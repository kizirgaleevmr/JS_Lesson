//Доступ к символу str[0] str.at(0)
let str = "Hello";

console.log(str[str.length - 1]);
console.log(str.at(-1));

// перебор строки for..of
for (let char of str) {
  console.log(char);
}

// Изменение регистр toUpperCase toLowerCase

str.toLowerCase();
str.toUpperCase();

//меняем символ в строке

str[3].toUpperCase();

//Поиск подстроки str.indexOf(substr, pos)
//где ищем.indexOf(что ищем, с какой позиции)

let str3 = "Widget with id";

//console.log(str3.indexOf("id", 2));
console.group("цикл indexOf");
let str4 = "Ослик Иа-Иа посмотрел на виадук";
let target = "Иа";
let pos = 0;

while (true) {
  let foundPos = str4.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log(`найдено тут: ${foundPos}`);
  pos = foundPos + 1;
}
console.groupEnd();
//

console.group();
let pos1 = -1;
while ((pos1 = str4.indexOf(target, pos1 + 1)) != -1) {
  console.log(pos1);
}
console.groupEnd();
//

let textPos = function () {
  let textNew =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ullam.";
  let target = "a";
  let pos = 0;

  while (true) {
    let foundPos = textNew.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log(`найдено тут: ${foundPos}`);
    pos = foundPos + 1;
  }
};

console.log(textPos());

let tag = "<p>";

let textNew =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ullam.";
let teDoc = "";
let target5 = "Lorem";
let pos5 = 0;

//if (textNew.indexOf(target5, pos5) != -1)
if (~textNew.indexOf(target5, pos5)) {
  textDoc = "совпадение есть!" + `${textNew.indexOf(target5, pos5)}`;
  textDocPos = textNew.indexOf(target5, pos5);
  textDocPosSym = textNew.at(textDocPos);
} else textDoc = "Совпадений нет!";

tag += textDoc + " " + textDocPosSym + "</p>";
document.write(tag);
document.write("<hr>");
document.write("<hr>");

// includes, startWith, endsWith
// str.includes(substr,pos) возращает true если в строке есть подстрока substr, либо false, если нет
document.write("Widget with id".includes("Widget")); //вернет true если есть
//Необязательный второй аргумент позволяет начать поиск с определенной позиции
// text.includes('text', 1)
document.write("<br>");
// 'text'.startWith('te') true
// 'text'.endsWith('xt') true
document.write("Widget".startsWith("Wid")); //проверяет начинается ли строка с определенной строки
document.write("<br>");
document.write("Widget".endsWith("et")); //проверяет заканчивается ли строка с определенной строки

// Получение подстроки. Есть 3 метода substring, substr, slice

// str.slice(start[, end])  [ ]- необязательный параметр
function strSub(textSub) {
  let str = "stringify";
  console.group("slice");
  console.log(str.slice(2, 6));
  console.log(str.slice(3, 5));
  console.log(str.slice(-5, -2)); //начинаем с позиции справа
  console.log(str.slice(3)); //Если аргумент end отсутствует, slice возращает символы до конца строки
  console.groupEnd();
  console.group("substring");
  console.log(str.substring(2, 6)); //Если аргумент end отсутствует, slice возращает символы до конца строки
  console.groupEnd();
}
strSub();

//str.substring(start[, end]) возращает часть строки между start и end (не включая) end
//str.substring(6, 2) -в этом случае перевернет аргументы

// str.substr(start[, length]) возращает часть строки от start длины length
console.log("Loremis".substr(0, 4));
console.log("Loremis".substr(-3, 3));
document.write("<br>");
document.write("<hr>");
document.write("<p>CodePointAt</p>");
let textDoc1 = "zdf";
document.write(textDoc1.codePointAt(1));
document.write("<br>");
document.write("<p>fromCodePoint</p>");
document.write(String.fromCodePoint(102));
document.write("<br>");

// str.codePointAt(pos) Возращает код для символа, находящего на позиции pos

// String.fromCodePoint(code) Создает символ по его коду

let str8 = "";
let arr = [];
for (let i = 65; i < 90; i++) {
  str = String.fromCodePoint(i);
  str8 = String.fromCodePoint(i);
  //str8 += "№ символа " + str.codePointAt(0);
  arr[i] = str8;
}
/*Вызов str.localeCompare(str2) возвращает число, которое показывает, какая строка больше в соответствии с правилами языка:

Отрицательное число, если str меньше str2.
Положительное число, если str больше str2.
0, если строки равны.*/

console.log("LocaleCompare:");
console.log("a".localeCompare("A"));

let str9 = " ";

function ucFirst(str) {
  //if (!str) return str;
  return (str = str[0].toUpperCase() + str.slice(1));
}

console.log(ucFirst(str9));

/*Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:*/
function checkSpam(str) {
  //что ищем
  let substr = prompt("Введите текс поиска", "text").toLowerCase();
  str = str.toLowerCase();
  if (str.includes(substr) == true) {
    return console.log(`true ${substr}` + " позиция: " + str.indexOf(substr));
  }
  return console.log(`false ${substr}`);
}
//checkSpam("innocent rabbit ViaGRA");

/*Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.*/
function truncate(str, maxlength) {
  let res = str.length > maxlength ? str.slice(0, maxlength) + "..." : str;
  return console.log(res);
}

truncate("Вот что мне хотелось бы сказать на эту тему", 20);

/*Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.*/

function extractCurrencyValue(sum) {
  return +sum.slice(1);
}

let res5 = "";
for (let i = 65; i < 220; i++) {
  res5 = String.fromCodePoint(i);
  document.write(res5 + " " + res5.codePointAt(0) + "<br>");
}
