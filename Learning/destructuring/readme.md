### Destructuring
- 1. Array
```javascript
//it allows us to "unpact" arrays or objects into a bunch of variables which makes working with arrays and objects a bit more convenient


//syntax:
let [a,b] = [1,2,3,4,5]
let [a,b,...c] = [1,2,3,4,5]
let {name,age} ={firstName:'Keshav',lastName:'Singh',age:30}
```

```javascript

// method 1
var s = 'Keshav Singh Jadon'
var arr_name =s.split(' ')

var firstName = arr_name[0]
var lastName = arr_name[2]

console.log(firstName)
console.log(lastName)

// method 2
var s = 'Keshav Singh Jadon'
var arr_name =s.split(' ')

var [firstName,,lastName] = arr_name
console.log(firstName)
console.log(lastName)

```

- 2. Object
```javascript
/*
* 1.
*/
const person = {
	firstName : 'Keshav',
	middleName: 'Singh',
	lastName:'Jadon',
	age:24
}

// > same key will be 
var [firstName,age] = person
console.log(firstName)
console.log(age)

// > below code genrate error, there should be key
var [a,b] = person
console.log(a)
console.log(b)


/*
* 2.
*/
let firstName ="Keshav"
let lastName = "Singh"
let age = 24

// way 1
const person={
	firstName:firstName,
	lastName:lastName,
	age:age
}
console.log(person)

// way 2 key can be differ in above case
const person = {
	fname:firstName,
	lname:lastName,
	Age_per:age
}
console.log(person)

// way 3 should be same variale
const person = {
	firstName,
	lastName,
	age
}
console.log(person)
```