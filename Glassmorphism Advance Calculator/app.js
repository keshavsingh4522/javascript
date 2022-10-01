var zero=document.getElementById("zero")
var one=document.getElementById("one")
var two=document.getElementById("two")
var three=document.getElementById("three")
var four=document.getElementById("four")
var five=document.getElementById("five")
var six=document.getElementById("six")
var seven=document.getElementById("seven")
var eight=document.getElementById("eight")
var nine=document.getElementById("nine")
var inpt=document.getElementById("inpt")
var delet=document.getElementById("del")
var dot=document.getElementById("dot")
var plus=document.getElementById("plus")
var minus=document.getElementById("minus")
var div=document.getElementById("div")
var mult=document.getElementById("mult")
var equal=document.getElementById("equal")
var clr=document.getElementById("clr")
var rslt=""

zero.addEventListener("click", function(){
    var zero=document.getElementById("zero").value;
    inpt.value+=zero;
    rslt+=zero;
})

one.addEventListener("click", function(){
    var one=document.getElementById("one").value;
    inpt.value+=one;
    rslt+=one;
})

two.addEventListener("click", function(){
    var two=document.getElementById("two").value;
    inpt.value+=two;
    rslt+=two;
})

three.addEventListener("click", function(){
    var three=document.getElementById("three").value;
    inpt.value+=three;
    rslt+=three;
})

four.addEventListener("click", function(){
    var four=document.getElementById("four").value;
    inpt.value+=four;
    rslt+=four;
})

five.addEventListener("click", function(){
    var five=document.getElementById("five").value;
    inpt.value+=five;
    rslt+=five;
})

six.addEventListener("click", function(){
    var six=document.getElementById("six").value;
    inpt.value+=six;
    rslt+=six;
})

seven.addEventListener("click", function(){
    var seven=document.getElementById("seven").value;
    inpt.value+=seven;
    rslt+=seven;
})

eight.addEventListener("click", function(){
    var eight=document.getElementById("eight").value;
    inpt.value+=eight;
    rslt+=eight;
})

nine.addEventListener("click", function(){
    var nine=document.getElementById("nine").value;
    inpt.value+=nine;
    rslt+=nine;
})

dot.addEventListener("click", function(){
    var dot=document.getElementById("dot").value;
    console.log(dot);
    inpt.value+=dot;
    rslt+=dot;
    console.log(rslt);
})
dot.onmousedown = function(){
    dot.style.backgroundColor="rgba(11, 88, 84,0.8)";
    dot.style.color="#7BC9DD";
}
dot.onmouseup = function(){
    dot.style.backgroundColor="#ffffff50";
    dot.style.color="rgba(11, 88, 84,0.8)";
}

delet.addEventListener("click", function(){
    var del=document.getElementById("del").textContent;
    console.log(del);
    if(rslt==""){
        return false;
    }
    else{
        rslt = rslt.slice(0,-1);
        inpt.value=rslt;
    }
})


// PLUS SIGN GOES FROM HERE
plus.addEventListener("click", function(){
    var plus=document.getElementById("plus").value;
    rslt+=plus;
    inpt.value=rslt;
})
plus.onmousedown = function(){
    plus.style.backgroundColor="rgba(11, 88, 84,0.8)";
    plus.style.color="#7BC9DD";
}
plus.onmouseup = function(){
    plus.style.backgroundColor="#ffffff50";
    plus.style.color="rgba(11, 88, 84,0.8)";
}


// MINUS SIGN GOES FROM HERE
minus.addEventListener("click", function(){
    var minus=document.getElementById("minus").value;
    rslt+="-";
    inpt.value=rslt;
})
minus.onmousedown = function(){
    minus.style.backgroundColor="rgba(11, 88, 84,0.8)";
    minus.style.color="#7BC9DD";
}
minus.onmouseup = function(){
    minus.style.backgroundColor="#ffffff50";
    minus.style.color="rgba(11, 88, 84,0.8)";
}


// MULTIPLY SIGN GOES FROM HERE
mult.addEventListener("click", function(){
    rslt+="*";
    inpt.value=rslt;
})
mult.onmousedown = function(){
    mult.style.backgroundColor="rgba(11, 88, 84,0.8)";
    mult.style.color="#7BC9DD";
}
mult.onmouseup = function(){
    mult.style.backgroundColor="#ffffff50";
    mult.style.color="rgba(11, 88, 84,0.8)";
}


// DIVIDE SIGN GOES FROM HERE
div.addEventListener("click", function(){
    rslt+="/";
    inpt.value=rslt;
})
div.onmousedown = function(){
    div.style.backgroundColor="rgba(11, 88, 84,0.8)";
    div.style.color="#7BC9DD";
}
div.onmouseup = function(){
    div.style.backgroundColor="#ffffff50";
    div.style.color="rgba(11, 88, 84,0.8)";
}


// EQUAL SIGN GOES FROM HERE 
equal.addEventListener("click", function(){
    for (let i = 0; i < rslt.length; ++i) {
        console.log(rslt[i]);
    }
    console.log(eval(rslt));
    inpt.value=eval(rslt);
})
equal.onmousedown = function(){
    equal.style.backgroundColor="#703355";  
    equal.style.color="#E4B0CE";
}
equal.onmouseup = function(){
    equal.style.backgroundColor="#e4b0ce96";
    equal.style.color="#703355";
}


// CLEAR GOES FROM HERE
clr.addEventListener("click", function(){
    inpt.value="";
    rslt="";
})
clr.onmousedown = function(){
    clr.style.backgroundColor="#703355";
    clr.style.color="#E4B0CE";
}
clr.onmouseup = function(){
    clr.style.backgroundColor="#e4b0ce96";
    clr.style.color="#703355";
}
