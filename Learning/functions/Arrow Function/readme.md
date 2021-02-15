- type 1
```javascript
var f = (name)=>{
	return `my name is ${name}`
}
console.log(f('Keshav Singh'))
```
- type 2
	- if function have one argument then no need of ()
```javascript
var f = name=>{
	return `my name is ${name}`
}
console.log(f('Keshav Singh'))
```
- type 3
	- if there is one statement then no nned of {}  and
	- no need of return it will return automatically
```javascript
var f = name=>`my name is ${name}`
console.log(f('Keshav Singh'))
```