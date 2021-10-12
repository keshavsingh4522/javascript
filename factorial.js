function factorial(number){
  var result=number;
  if(number==0 || number==1){
    result=1;
    return result;
  }
  for(var i=number-1;i!=0;i--){
    result=result*i;
  }
  return result;
}
