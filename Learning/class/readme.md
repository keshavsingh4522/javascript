- class defining
```javascript
class car{
	// constructor
	constructor(name,sheet,color,brand){
		this.name=name
		this.sheet=sheet
		this.color=color
		this.brand=brand
	}
	// method
	detailsOfCar()
	{
		return `${this.name} car is of ${this.brand} brand. it has ${this.sheet} sheet and its color is ${this.color}`
	}
}
// acccesing class
var cs_01 = new car('scarpio','5','black','mahindra')

// dis[lay car object
console.log(cs_01)

// display car method
console.log(cs_01.detailsOfCar())
```

- difference between function and class
	- functions
		- hoisted
		- can be overwritten
	- class
		- not hoisted
		- can't be overwritten(can be extended)

- understanding of hoisting
	- functions can be called anywhere
		- called on top of function
```javascript
console.log(f())
function f()
{
	return 'hello'
}
```
		- called below function
```javascript
function f()
{
	return 'hello'
}
console.log(f())
```
	- class can be called/accessed after defining this
		- accessing before defining class will give error
```javascript
var cx = new c('hi')
console.log(cx.prop)
class c{
	constructor(prop)
	{
		this.prop = prop
	}
}
```
		- class accessed after defining class
```javascript
class c{
	constructor(prop)
	{
		this.prop = prop
	}
}
var cx = new c('hi')
console.log(cx.prop)
```