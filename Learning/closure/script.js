/* case 1
function ard() {
	var a=4;
	var c=6;
	return a*c
}
console.log(ard())
*/

/* case 2
*/
function ard() {
	var a=4;
	var c=6;
	function hi()
	{
		var res = a*c
		return res
	}
	return hi
}


var g = ard()
// console.log(a)
console.log(g())
// console.log(a)
