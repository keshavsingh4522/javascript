$(document).ready(function(){
const Pro = new Promise((resolve,reject) =>{
	$.get('https://www.w3schools.com/jquery/ajax_get.asp',(data)=>{
		resolve(data)
	}).fail((err)=>{
		reject(new Error('call failed for get with status '))
	})

})
});