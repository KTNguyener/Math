function wakeUp(){
 var time=Math.random()*5000
 var y=time/1000
 var x=y.toFixed(2);
 setTimeout(function(){
 	window.alert("Wake Up" + " " + x)},time)
}
