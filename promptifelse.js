var infoTech = {
	teacher: "Howard Kam",
	classroom: "F103",
  students: 18,
};

var userInput = prompt("classroom or students?");

var lowercase = userInput.toLowerCase();

	if (lowercase === "students"|| lowercase === "classroom")
	{window.alert(infoTech[lowercase])}
  
  else {askAgain();
  }

function askAgain() {
var userInput = prompt("classroom or students?");

var lowercase = userInput.toLowerCase();

	if (lowercase === "students"|| lowercase === "classroom")
	{window.alert(infoTech[lowercase])}
  
  else {askAgain();
  }
}
