function calculate() {
  var x=document.getElementById('a').value;
  var y=document.getElementById('b').value;
  var z= Math.sqrt((Math.pow(x,2))+(Math.pow(y,2)))
 
  document.getElementById('c').innerHTML="C= " + z;
}