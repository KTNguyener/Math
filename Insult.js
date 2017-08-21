function insult(){
  var adjective = ["stupid","silly","cheap","lazy","disasterous"]
  //made a variable array that has adjectives
  var noun = ["walrus","hippo","monster","doormat","disaster"]
  //made a variable array that has nouns
  var adjChooser = Math.floor(Math.random()*5)
  //made a random number generator for adjectives
  var nounChooser = Math.floor(Math.random()*5)
  //nade a random number generator for nouns
  window.alert("You are a " + adjective[adjChooser] + " " + noun[nounChooser] + ".")
  
}