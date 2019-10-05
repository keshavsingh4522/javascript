    <script>  
    function display()  
    {  
      var x=document.getElementById("num").value;  
    document.getElementById("result").innerHTML=Math.cos(x);  
    }  
    </script>  
    <form>  
      Enter a number: <input type="text" id="num">  
      <input type="button"  onclick="display()" value="submit">  
      </form>  
      <p><span id="result"></span></p>  
