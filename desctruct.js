let p = document.getElementById("myDate");
p.style.fontSize = "60px";
p.style.fontFamily = "sans-serif";
p.style.display = "inline-block";
p.style.color = "#FFF";
p.style.background = "black";
let i = 0;
const COLOR_BODY = "#F5DEB3";
window.document.body.style.background = COLOR_BODY;
function m() {
  let today = new Date();
  let d =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let res = d;
  p.innerText = d;
  if (1 < 2) {
    setTimeout(m, 1000);
  }
}
m();

let b = document.querySelector(".btn");
let b2 = document.querySelector(".btn2");
let b3 = document.querySelector(".btn3");
let b4 = document.querySelector(".hidden");

b.addEventListener("click", function () {
  b2.style.background = "green";
  p.style.background = "#00FA9A";
});
b3.addEventListener("click", function () {
  b2.style.background = "#fff";
  b.style.background = "#fff";
  p.style.background = "#fff";
  b2.hidden = false;
  b.hidden = false;
});

b4.addEventListener("click", function () {
  b2.hidden = true;
  b.hidden = true;
});

b2.addEventListener("click", function () {
  b.style.background = "orange";
});

for (let i = 0; i < 10; i++) {}

class Constr {
  constructor(name, age, email, message) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.message = message;
  }
}

const marsel = new Constr("marsel", 38, "mk@mail.ru", "text1");
const masha = new Constr("Masha", 30, "masha@mail.ru", "text2");
const mark = new Constr("mark", 35, "mark@mail.ru", "text3");
const ivan = new Constr("ivan", 25, "ivan@mail.ru", "text4");

console.log(marsel);
let people = [marsel, masha, mark, ivan];

let wSet = new WeakMap();
let k = 0;
for (let item of people) {
  wSet.set(item, k);
  k++;
}
const COLOR_TEXT = "#F5DEB3";
const COLOR_BACK = "#8B4513";

console.log(wSet);
let align = "left";

window.document.write(
  "<table border='1'" +
    `align=${align}` +
    " cellspacing='0' cellpadding='9'><caption style='background:green'><b>User</b></caption><tr><th>Имя</th><th>возраст</th><th>email</th><th>Сообщение</th></tr>"
);
for (let item of people) {
  window.document.write("<tr align='center'>");
  window.document.write("<td>", item.name, "</td>");
  window.document.write("<td>", item.age, "</td>");
  window.document.write("<td align='left'>", item.email, "</td>");
  window.document.write("<td>", item.message, "</td>");
  window.document.write("</td>");
}
window.document.write("</table>");

let caption = document.querySelector("caption");
let table = document.querySelector("table");

caption.style.background = COLOR_BACK;
caption.style.color = COLOR_TEXT;
let red = document.getElementById("red");
function qu() {
  let qudro = document.createElement("div");
  const text = document.createTextNode("Hello Marsel");
  qudro.appendChild(text);
  qudro.className = "redQu";
  qudro.style.background = "red";
  qudro.style.width = "200px";
  qudro.style.height = "200px";
  document.body.insertAdjacentElement("beforebegin", qudro);
}

let btn5 = document.querySelector(".btn5");

btn5.addEventListener("click", rem);
function rem() {
  let qU = document.querySelector(".redQu");
  qU.remove();
}

let btn4 = document.querySelector(".btn4");

btn4.addEventListener("click", qu);

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 600,
    },
  ],
  development: {
    sites: [
      {
        name: "Peter",
        salary: 3000,
      },
    ],
    internals: [
      {
        name: "Jack",
        salary: 3300,
      },
    ],
  },
};

function sum(obj) {
  if (Array.isArray(obj)) {
    return obj.reduce((acc, el) => acc + el.salary, 0);
  } else {
    let result = 0;
    for (let item in obj) {
      result += sum(obj[item]);
    }
    return result;
  }
}

console.log(sum(company));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
let y = [];
for (let item in list) {
  if (item == "value") {
    // console.log(item + ":" + list[item]);
    y.push(item + ":" + list[item]);
  }
  if (item == "next") {
    for (let el in list[item]) {
      if (el == "value") {
        // console.log(el + ":" + list[item][el]);
        y.push(el + ":" + list[item][el]);
      }
      if (el == "next") {
        for (el2 in list[item][el]) {
          if (el2 == "value") {
            // console.log(el2 + ":" + list[item][el][el2]);
            y.push(el2 + ":" + list[item][el][el2]);
          }
          if (el2 == "next") {
            for (el3 in list[item][el][el2]) {
              if (el3 == "value") {
                // console.log(el3 + ":" + list[item][el][el2][el3]);
                y.push(el3 + ":" + list[item][el][el2][el3]);
              }
            }
          }
        }
      }
    }
  }
}

let w = y.sort((a, b) => {
  return b.slice(-1) - a.slice(-1);
});

console.log(w);
let o = [];
function recurs(list) {
  for (let item in list) {
    if (item == "value") {
      o.push({ [item]: list[item] });
    }
    if (typeof list[item] == "object") {
      return recurs(list[item]);
    }
  }
  // return o;
  o.sort((a, b) => {
    return b.value - a.value;
  });
  return o;
}

let lol = [];
function printRevers(obj) {
  if (obj.next) {
    printRevers(obj.next);
  }
  lol.push(obj.value);
  return lol;
}

let lol2 = printRevers(list);

console.log(lol2.sort((a, b) => b - a));

let prom = new Promise((resolve, rejects) => {
  setTimeout(() => {
    resolve(recurs(list));
  }, 1000);
});

prom
  .then((data) => {
    data.push("marsel");
    return data;
  })
  .then((d) => console.log(d));

let str = "123456789";

let a = [1000, ...str];
let arg = [56, 8, 6, 4, 9, 555, 7];
function m(x, y) {
  return function (b) {
    return b >= x && b <= y;
  };
}
// console.log(a);
//1 2 3 4 5 6  = b
let g = a.filter(m(3, 6));
console.log(g);

console.log(Math.max(...a, ...arg));
