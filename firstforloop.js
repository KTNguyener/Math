var infoTech = {
	classroom: "F103",
  students: 18,
};

var userInput = prompt("classroom or students?");
var lowercase = userInput.toLowerCase();
	if ((lowercase === "students" || lowercase === "classroom"))
	{window.alert(infoTech[lowercase]);
  }
  else {
  	for(i = 1; i < 3; i++) {
  		var userInput = prompt("Try again. You have " + (3 - i) + " tries left.");
			var lowercase = userInput.toLowerCase();
			if ((lowercase === "students" || lowercase === "classroom")) {
      i = 3;
			window.alert(infoTech[lowercase]);
  }
 }
}
