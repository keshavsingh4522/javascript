- Rest Operator
```javascript
// you have given below a function f it will take argument only two
// if i pass more than 2 argumnet at time of calling then it will take take only first two args rest will reject
// to overcome this we use rest operator (...)

function f(n1,n2){
	return n1+n2
}
console.log(f(2,5)) // output : 7
console.log(f(3,9,5,6)) // output : 12
// it accept only 3,9 or first two args, rest arg. is rejected



// rest type 1
function ff(...args){
	console.log(args) // args is an array
}
console.log(ff(1,2,3,4,5,6,7))

// rest type 2
function ff(n1,n2,...args){
	console.log(n1,n2,args) // args is an array
}
console.log(ff(1,2,3,4,5,6,7))

// rest type 3 --> this give erroe
//  rest operator always use in last
function ff(n1,...args,n2){
	console.log(n1,n2,args) 
}
console.log(ff(1,2,3,4,5,6,7))
```

- Spread operator
```
this used in two case
1. array
2. object
```
	- 1. Array
```javascript
/*
* Q1. create copy of array.
*/

// method 1  
 var arr = [1,2,3,4,5,7]
 var arr_2 = arr
 arr_2.push(98)
 console.log(arr)
 console.log(arr_2)


// if we asssign array to a second array, then both are refrancing to same object
// change in one array will reflect same change in second array

// Method 2
// To overcome the above situation we use spread operator
 var arr = [1,2,3,4,5,7]
 var arr_2 = [...arr]
 arr_2.push(98)
 console.log(arr)
 console.log(arr_2)

/*
* Q2. concatenate array
*/

// Method 1
var arr_1 = [1,2,3,4]
var arr_2 = [5,6,7]

var arr_3 = arr_1.concat(arr_2)
console.log(arr_3)

// Method 2 using spread op
var arr_1 = [1,2,3,4]
var arr_2 = [5,6,7]

var arr_3 = [...arr_1,...arr_2]
console.log(arr_3)

//
var arr_1 = [1,2,3,4]
var arr_2 = [5,6,7]

var arr_3 = [34,...arr_1,...arr_2,89]
console.log(arr_3)

```
	- 2. Object
```javascript
let obj1 = {
	fname:'Keshav',
	lname:'singh'
}

let obj2 = {
	age:24
}

let obj3 = {...obj1,...obj2}
console.log(obj3)
```
