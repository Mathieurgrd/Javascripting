<!DOCTYPE html>
<html>
<body>

<p>Click the button to display a confirm box.</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
   
    var patate = "#"
    var r = confirm("Hey mon ami tu aime les patates?");
    if (r == true) {
      for(i = 0; i < 8; i ++){
        var txt;
        if(txt == null){ 
          txt = patate.repeat(i) + "<br>";
          
        }else{
        txt = txt + patate.repeat(i) + "<br>";
        }
      }
    } else {
        txt = "Vous semblez tiraillé (lol) ! ";
    }
    document.getElementById("demo").innerHTML = txt;
}
</script>

</body>
</html>
