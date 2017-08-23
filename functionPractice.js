function calculateArea(width,height){
var area = width*height
return area;
}

var customWidth = prompt("Enter Width")
var customHeight = prompt("Enter Height")

var wallOne = calculateArea(customWidth,customHeight)
//wallOne defines the width and height
window.alert(wallOne)

//line break

var pres = {

fName: "Bernie",
lName: "Sanders",
age: 75

};

window.alert(pres.fName);

//use this to build an object with multiple values and names