var kiva = {
fName : "Kiva",
age : 17,
grade : 12,
friends : ["Ryan","Raen","Daniel"]
//created an array in an object
}

var raen = {
fName : "Raen",
age : 16,
grade : 11,
friends : ["Kiva","Alexis","Daniel"]
}

var ryan = {
fName : "Ryan",
age: 16,
grade: 12,
friends : ["Kiva","Blake","Timmy"]
}

var students = [kiva,raen,ryan];
//created an array which lists all objects which have arrays

window.alert(students[0].friends[2]);
//created an alert that chooses an object and a friend from an object