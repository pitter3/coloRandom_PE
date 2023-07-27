//Update data model so we can access hex codes in squares and captions

//DATA MODEL

var hexArray = [];

//DOM ELEMENTS

var paletteButton = document.querySelector(".palette-button");
var box0 = document.querySelector("#box0");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var cap0 = document.querySelector("#cap0");
var cap1 = document.querySelector("#cap1");
var cap2 = document.querySelector("#cap2");
var cap3 = document.querySelector("#cap3");
var cap4 = document.querySelector("#cap4");
var unlockButton0 = document.querySelector("#unlocked0");
var lockButton0 = document.querySelector("#locked0");
var unlockButton1 = document.querySelector("#unlocked1");
var lockButton1 = document.querySelector("#locked1");
var unlockButton2 = document.querySelector("#unlocked2");
var lockButton2 = document.querySelector("#locked2");
var unlockButton3 = document.querySelector("#unlocked3");
var lockButton3 = document.querySelector("#locked3");
var unlockButton4 = document.querySelector("#unlocked4");
var lockButton4 = document.querySelector("#locked4");

//EVENT LISTENERS

paletteButton.addEventListener("click", function(event){
    randomPalette();
    createNewPalette();
}
)

unlockButton0.addEventListener("click", function(event) {
  lock0();
}
)

lockButton0.addEventListener("click", function(event) {
  unlock0();
}
)

unlockButton1.addEventListener("click", function(event) {
  lock1();
}
)

lockButton1.addEventListener("click", function(event) {
  unlock1();
}
)

unlockButton2.addEventListener("click", function(event) {
  lock2();
}
)

lockButton2.addEventListener("click", function(event) {
  unlock2();
}
)

unlockButton3.addEventListener("click", function(event) {
  lock3();
}
)

lockButton3.addEventListener("click", function(event) {
  unlock3();
}
)

unlockButton4.addEventListener("click", function(event) {
  lock4();
}
)

lockButton4.addEventListener("click", function(event) {
  unlock4();
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
  // for(var i=0; i<6; i++) {
  // hexArray.push(randomHex());
  // }
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    hexArray.push(randomHex());
    // return hexArray
    }



function createNewPalette(){
    cap0.innerText = hexArray[0];
    cap1.innerText = hexArray[1];
    cap2.innerText = hexArray[2];
    cap3.innerText = hexArray[3];
    cap4.innerText = hexArray[4];
    box0.style.backgroundColor = hexArray[0];
    box1.style.backgroundColor = hexArray[1];
    box2.style.backgroundColor = hexArray[2];
    box3.style.backgroundColor = hexArray[3];
    box4.style.backgroundColor = hexArray[4];
}

function lock0() {
  unlockButton0.hidden = true;
  lockButton0.hidden = false;
}

function unlock0() {
  lockButton0.hidden = true;
  unlockButton0.hidden = false; 
}

function lock1() {
  unlockButton1.hidden = true;
  lockButton1.hidden = false;
}

function unlock1() {
  lockButton1.hidden = true;
  unlockButton1.hidden = false; 
}

function lock2() {
  unlockButton2.hidden = true;
  lockButton2.hidden = false;
}

function unlock2() {
  lockButton2.hidden = true;
  unlockButton2.hidden = false; 
}

function lock3() {
  unlockButton3.hidden = true;
  lockButton3.hidden = false;
}

function unlock3() {
  lockButton3.hidden = true;
  unlockButton3.hidden = false; 
}

function lock4() {
  unlockButton4.hidden = true;
  lockButton4.hidden = false;
}

function unlock4() {
  lockButton4.hidden = true;
  unlockButton4.hidden = false; 
}

// function hideImage() {
//   meditationImage.hidden = true;
// }

// function showImage() {
//   meditationImage.hidden = false;