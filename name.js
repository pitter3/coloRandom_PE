//Update data model so we can access hex codes in squares and captions

//DATA MODEL

var hexArray = [];

//DOM ELEMENTS

var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var cap1 = document.querySelector("#cap1");
var cap2 = document.querySelector("#cap2");
var cap3 = document.querySelector("#cap3");
var cap4 = document.querySelector("#cap4");
var cap5 = document.querySelector("#cap5");
var paletteButton = document.querySelector(".palette-button");

//EVENT LISTENERS

paletteButton.addEventListener("click", function(event){
    randomPalette();
    createNewPalette();
}
)

//FUNCTIONS

function randomHex(){
var hexCharacters = ["A", "B", "C", "D", "E", "F", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var hexArray = [];
for(var i=0; i<6; i++){
  var randomIndex =  Math.floor(Math.random() * 16);
  var randomCharacter = hexCharacters[randomIndex];
  hexArray.push(randomCharacter);
}
  var hexCode = `#${hexArray.join("")}`;
  return hexCode
}


//Refactor with loop?
function randomPalette(){
    hexArray = [];
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    return hexArray
    }



function createNewPalette(){
    cap1.innerText = hexArray[0];
    cap2.innerText = hexArray[1];
    cap3.innerText = hexArray[2];
    cap4.innerText = hexArray[3];
    cap5.innerText = hexArray[4];
    box1.style.backgroundColor = hexArray[1];
    box2.style.backgroundColor = hexArray[2];
    box3.style.backgroundColor = hexArray[3];
    box4.style.backgroundColor = hexArray[4];
    box5.style.backgroundColor = hexArray[5];
}