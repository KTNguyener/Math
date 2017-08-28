var newName = prompt("what is Cole's new first name?")
//takes user's prompt
var cole = {
	fName:"Cole",
	lName: "House",
	age: 15,
	grade: 10,
}
//cole's info
window.alert(cole.fName = newName);
//window alert that takes user's imput and replaces cole's firstname
window.alert(cole.fName)
//test to ensure that cole's first name has been changed
//August 28, replacing values in a object literal

var x = prompt("enter fName, lName, age, or grade")

var students = {
	fName:"Kiva",
	lName: "Nguyen",
	age: 17,
	grade: 12,
}

window.alert(students[x]);
