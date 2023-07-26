//Update data model so we can access hex codes in squares and captions

//DATA MODEL

var hexArray = [];
var box1 = document.querySelector("#box1");
var paletteButton = document.querySelector(".palette-button");
var cap1 = document.querySelector("#cap1");


//EVENT LISTENERS

paletteButton.addEventListener("click", function(event){
    randomPalette();
    createNewPalette();
}
)

//FUNCTIONS

var hexCharacters = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function randomHex(hexCharacters){
var hexArray = [];
for(var i=0; i<6; i++){
  var randomIndex =  Math.floor(Math.random() * 16);
  var randomCharacter = hexCharacters[randomIndex];
  hexArray.push(randomCharacter);
}
  var hexCode = `#${hexArray.join("")}`;
  return hexCode
}


//REFACTOR WITH FOR LOOP
function randomPalette(){
    hexArray.push(randomHex(hexCharacters));
    hexArray.push(randomHex(hexCharacters));
    hexArray.push(randomHex(hexCharacters));
    hexArray.push(randomHex(hexCharacters));
    hexArray.push(randomHex(hexCharacters));
    return hexArray
    }


console.log(randomPalette())

function createNewPalette(){
    cap1.innerText = hexArray[0];
    box1.style.backgroundColor = hexArray[0];
}