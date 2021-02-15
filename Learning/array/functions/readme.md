- map
```javascript
/*
* 1. Array
*/
//Syntax:
array.map((item)=>{
	// callback function
})


// Example 1
var myArr = [1,2,3,4,5]
var upArr = myArr.map(item=>item*2)
console.log(myArr)
console.log(upArr)

// Example 2
var myArr = [1,2,3,4,5]
var upArr = myArr.map((item)=>{
	return item*2
})
console.log(myArr)
console.log(upArr)

// Example 3
var myArr = [1,2,3,4,5]
var upArr = myArr.map((item,index)=>{
	console.log(`value at index ${index} is ${item}`)
	return item*2
})
console.log(myArr)
console.log(upArr)


/*
* 2. Object
*/

//
var obj = [
{
	fname:'Keshav',
	lname:'Singh',
	age:24,
	id:1001
},
{
	fname:'Pradeep',
	lname:'Singh',
	age:18,
	id:1002
},
{
	fname:'Raju',
	lname:'Kumar',
	age:24,
	id:1003
},
]
var obj_1 = obj.map((data,key)=>{
	console.log(data)
	return {ID:data.id,name: data.fname+' '+data.lname}
}) 
```

- reduce
```javascript
/*
* Array
*/
//Syntax:
array.reduce((acc,item)=>{
	// callback function
},0)

// Ex 1 --> sum of array
var arr = [1,2,3,4,5,6]
var result = arr.reduce((acc,item)=>{
	// console.log(item)
	// console.log(acc)
	return acc+item // it looks like as  acc = acc + item
},0) // this 0 is acc initial value
console.log(result)


/*
* Object
*/
var age_sum = obj.reduce((acc,item)=>{
	// console.log(acc,item)
	// summing all age
	return acc+item.age
},0)
console.log(age_sum)
```

- filter
```javascript
//Synatx
arr.filter(item=>{
	// return true or false to add or skip the element
})

/*
* 1. Array
*/
// ex 1
var arr = [1,2,3,4,5,6,7,8,9]
var arr_f = arr.filter(item=>{
	if(item%2 == 0)
		return true
	return false
})
console.log(arr_f)

/*
* 2. Object
*/
var obj_f = obj.filter(item=>item.id%2)
console.log(obj_f)
```
- find and findIndex
```javascript
/*
find --> it return the first element which match the condition
*/

//  Ex 1
var arr = [-1,-2,-3,-4,1,2,4,3]
var result = arr.find((item)=>{
	console.log(item)
	return true
})
console.log(result)

// Ex 2
var arr = [-1,-2,-3,-4,1,2,4,3]
var result = arr.find((item)=>{
	console.log(item)
	return false
})
console.log(result)

// Ex 3
var arr = [-1,-2,-3,-4,1,2,4,3]
var result = arr.find((item)=>{
	return (item%2 ==0 && item>=0)
})
console.log(result)

/*
findinex --> similar to find but i return index rather then element
*/
//  Ex 1
var arr = [-1,-2,-3,-4,1,2,4,3]
var result = arr.findIndex((item)=>{
	console.log(item)
	return true
})
console.log(result)

// Ex 2
var arr = [-1,-2,-3,-4,1,2,4,3]
var result = arr.findIndex((item)=>{
	console.log(item)
	return false
})
console.log(result)

// Ex 3
var arr = [-1,-2,-3,-4,1,2,4,3]
var result = arr.findIndex((item)=>{
	return (item%2 ==0 && item>=0)
})
console.log(result)
```