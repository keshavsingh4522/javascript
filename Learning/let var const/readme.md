- **var**
	- general variable, general local/global variable
	-example
```javascript
function loc()
{
	var x = 34;
	if(x){
		var x='I am different'
		console.log('block x:  ',x)
	}
	console.log('x: ',x)
}
loc()
```
- let
	- block level varible, value exits only in block
	- example 1
```javascript
function loc()
{
	var x = 34;
	if(x){
		let x='I am different'
		console.log('block x:  ',x)
	}
	console.log('x: ',x)
}
loc()
```
	- example 2
```javascript
function loc()
{
	let x = 34;
	if(x){
		let x='I am different'
		console.log('block x:  ',x)
	}
	console.log('x: ',x)
}
loc()
```
- const
	- value cannot be changed once defined with const
	- example 1
```javascript
function loc()
{
	const x = 23;
	console.log(x)
}
loc()
```
	- example 2
```javascript
function loc()
{
	const x = 23;
	console.log(x)
	x=23; // it genreate error
	console.log(x)
}
loc()
```