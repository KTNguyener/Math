var user = prompt("Howard has $1000. How much money do you want to steal from him?")

var bankAccount= {};

bankAccount["name"] = "Howard";

bankAccount["balance"] = 1000;

bankAccount["balance"] -=user

window.alert(bankAccount["balance"])
