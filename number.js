//Конструктор, оператор "new"


/*
	function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false/*
*/

function hello() {
	console.log('Hello', this);
}

const user = {
	name: 'marsel',
	age: 37,
	say: hello,
	sayhelloWindow: hello.bind(this),
	logInfo: function (job, phone, city) {
		console.group('Group name is: ', this.name);
		console.log('Name is ', this.name);
		console.log('Age is ', this.age);
		console.log(`Job is ${job}`);
		console.log(`Phone is ${phone}`);
		console.log(`City is ${city}`);
		console.groupEnd();
	},
}

const john = {
	age: 30,
	name: 'John',
};

function fn(name, job, phone, city) {
	console.log(user.logInfo.apply(name, [job, phone, city]));
}

fn(john, 'fr', '66', 'ufa');

//Опциональная цепочка '?.'

