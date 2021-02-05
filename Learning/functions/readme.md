- Three types of function
	- Named functions
	- Anonymous functions
	- Immediately invoked function expressions

#### Named function
- Regular function, called explicitly by name
```javascript
function multiply(){
	var result = 3*4;
	console.log("3 multiplied by 4 is ",result)
}
multiply()
```

#### Anonymous function
- Anonymous function stored in variable
- invoked the variable as calling the function
```javascript
var divided = function(){
	var result = 3 / 4;
	console.log("3 divided by 4 is ",result)
}
divided()
```

#### Immediately invoked function expression
- Runs as sson as the browser finds it
```javascript
(function(){
	var result = 12/0.75
	console.log("12 divide by 0.75 is ",result)
})()
```