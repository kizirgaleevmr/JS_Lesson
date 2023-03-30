let showD = (n) => {
	return document.write(n);
}
let showC = (n) => {
	return console.log(n);
}

const user = {};
let srn = 'surname'
user.name = "John";
user[srn] = "Smith";
user.age = 37;
user.country = 'Russia';
user.city = 'Ufa';
//user.name = "Pete";
//delete user.name;

for (property in user) {
	document.write(property + ':' + user[property] + '<br>');
}
document.write('<br>');


let schedule = {
	name: 'john',
}

let isEmpty = (obj) => {
	for (let key in obj) {
		return false;
	} return true;
}

document.write(isEmpty(schedule));

document.write('<br>');

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
}
let sum = (obj) => {
	let res = 0;
	for (key in obj) {
		res += obj[key];
	}
	document.write(res);
}

sum(salaries);

document.write('<br>');


function multiplyNumeric(obj) {
	for (key in obj) {
		if (typeof (obj[key]) == 'number') {
		obj[key] = obj[key] * 2;
		}
		showD(key + ': ' + obj[key] + '<br>');
	}
}

let menu = {
	width: 200,
	height: 300,
	title: "My menu",
}

multiplyNumeric(menu);

showC(Math.pow(2, 4));

let newF = (a, b) => showC(a * b);

newF(4, 2);

showD('<br>');

let clone = {};

for (key in user) {
	clone[key] = user[key];
}
user.city = 'Msc';
showC(clone);
showC(user);

let permission1 = { canView: true, popular: true, };
let permission2 = { canEdit: true, fruir: 'apple', };

permission1.age2 = 40;

Object.assign(user, permission1, permission2);

showC(user);

