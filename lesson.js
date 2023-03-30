/*
//Конструктор прототип экземпляра
class Comment {
	constructor(text) {
		this.text = text
		this.votesQty = 0
	}
	upvote() {
		this.votesQty += 1
	}
	static mergeComment(second, first) {
		return `${second} ${first}`
	}
}

const firstComment = new Comment('Some Comment')

// Расширения класса
class NumbersArray extends Array {
	sum() {
		return this.reduce((el, acc) => acc += el, 0)
	}
}

const myArray = new NumbersArray(2, 6, 9)


const myName = new String('Marsel')

const myNewArray = ['John', 'Ivan', 'Pupkin', 'Petya']
for (let i = 0; i < 3; i++) {
	myNewArray[i] = prompt('Введите имя и фамилию студента')
}

myNewArray.forEach(el => document.write(`${el} <br>`))

document.write('<ol>')
for (i = 0; i < myNewArray.length; i++) {
	document.write(`<li> ${myNewArray[i]}  </li>`);
}
document.write('</ol>')

const mySilki = ['Главная', 'Галерея', 'Контакты', 'О нас']

document.write('<div class="nav">')
document.write('<ul>')
mySilki.forEach(el => {
	document.write(`<li><a href=#>${el}</a> </li>`)
})
document.write('</ul>')
document.write('</div>')

const myYear = +prompt('Введите свой год рождения')
const year = new Date()
const myAge = year.getFullYear() - myYear
const myName2 = prompt('Введите свое имя')

let resultYear = '';

function myNfn(age) {

	let resMyYear = age % 10
	if (resMyYear == 1) {
		return resultYear = 'год'
	}
	if (resMyYear > 1 && resMyYear < 5) {
		return resultYear = 'года'
	}
	if (resMyYear >= 5 && resMyYear <= 9) {
		return resultYear = 'лет'
	}
	if (resMyYear == 0) {
		return resultYear = 'лет'
	}
}

myNfn(myAge)

console.log(`Меня зовут ${myName2}  и мне ${myAge} ${resultYear}`)
//document.write(`Меня зовут ${myName2} и мне ${myAge} ${resultYear}`)
*/

// const myPromise = new Promise((res, rej) => {
// 	fetch('https://jsonplaceholder.typicode.com/todos/3')
// 		.then(res => res.json())
// 		.then(json => console.log(json))
// 		.catch(error => console.error(error))
// })
///////////////////////////////////////////////////////////////////////////////
// setTimeout(() => {
// 	console.log('Preparing data...')

// 	const backendData = {
// 		server: 'avs',
// 		port: 2000,
// 		status: 'working'
// 	}

// 	setTimeout(() => {
// 		backendData.modified = true
// 		console.log('Data received', backendData)
// 	}, 2000)
// }, 2000)


// const p = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Preparing data...')
// 		const backendData = {
// 			server: 'avs',
// 			port: 2000,
// 			status: 'working'
// 		}
// 		resolve(backendData)
// 	}, 2000)
// })

// p.then((data) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			data.modified = true
// 			resolve(data)
// 		}, 2000)
// 	})
// }).then(clientData => {
// 	clientData.fromPromise = true
// 	return clientData
// })
// 	.then(data2 => {
// 		data2.newProperty = 'new property'
// 		return data2
// 	})
// 	.then(data => {
// 		console.log('Modified', data)
// 	})
// 	.catch(err => console.error('Error', err))

// const timerPromise = () =>
// 	new Promise((resolve, reject) =>
// 		setTimeout(() => resolve(), 2000))


// const asyncFn = async () => {
// 	console.log('Timer start')
// 	await timerPromise()
// 	console.log('Timer anded')
// }

// asyncFn()

// async function myAsync() {
// 	console.log('myASync start')
// 	await asyncFn()
// 	console.log('myAsync ended')
// }

// myAsync()


// const getData = async (url) => {
// 	const res = await fetch(url)
// 	const json = await res.json()
// 	return json
// }

// getData()
// 	.then(data => console.log(data))
// 	.then(error => console.log(error.message))

// function createTable(row, col) {
// 	if (row == undefined) row = 2
// 	col = col || 2
// 	let table = '<table class="newTable">'

// 	for (let i = 0; i <= row; i++) {
// 		table += "<tr>"
// 		for (let j = 0; j < col; j++) {
// 			table += `<td>Ячейка ${j + 1} </td>`
// 		}
// 		table += "</tr>"
// 	}
// 	table += "</table>"
// 	document.write(table)
// }

// const countRobits = (n) => {
// 	for (i = 1; i < n; i++) alert('Кролик' + i)
// }


// function handler() {
// 	alert('Спасибо2')
// }

// const handler2 = () => {
// 	alert('Спасибо3')
// }

// let elem = document.getElementById('elem')
// elem.onclick = () => alert('Спасибо')
// elem.addEventListener("click", handler)
// elem.addEventListener("click", handler2)

/*var table = new Array(10)


for (let i = 0; i < table.length; i++) {
	table[i] = new Array(10)
}

for (let row = 0; row < table.length; row++) {
	for (col = 0; col < table.length; col++) {
		table[row][col] = row * col
	}
}
*/
/*
document.getElementById('hider').onclick = function () {
	const newText = document.getElementById('text')
	newText.hidden = true;
}

document.getElementById('show').onclick = () => {
	document.getElementById('text').hidden = false
}

document.getElementById('table_hidden').onclick = () => {
	const hiddenTable = document.getElementById('table_hidden')
	hiddenTable.hidden = true
}

document.getElementById('show_table').onclick = () => {
	document.getElementById('table_hidden').hidden = false
}
*/
/*
document.querySelector('.b-1').addEventListener('click', () => {
	let a = document.querySelector('.i-1').value;
	let b = document.querySelector('.i-2').value;
	let a1 = Number(a);
	let b1 = Number(b);
	var res = a1 + b1;
	const myArray = []

	document.querySelector('.out-2').innerHTML += '<li>' + res + ';' + '</li > ';
	let strNum = document.querySelector('.out-2').innerHTML

	console.log(strNum)

	for (let index in strNum) {
		if (parseInt(strNum[index])) {
			myArray[index] = strNum[index]
		}
	}
	console.log(myArray)
})


let str = 'ewr342fc245dfg'
var myArray2 = []
let numEl = ''
for (let el in str) {
	if (parseInt(str[el])) {
		numEl += '/' + str[el]
		myArray2[el] = numEl.split('/')
	}
}


console.log(numEl)
*/
