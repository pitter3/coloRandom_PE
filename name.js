//Update data model so we can access hex codes in squares and captions

//DATA MODEL

var hexObjects = [
  {hex: "#EA9999", locked: false},
  {hex: "#FACB9C", locked: false},
  {hex: "#FFE59A", locked: false},
  {hex: "#B6D7A8", locked: false},
  {hex: "#A4C4CA", locked: false}
]


//DOM ELEMENTS

var paletteButton = document.querySelector(".palette-button");
var saveButton = document.querySelector(".save-button");
var box0 = document.querySelector("#box0");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var savebox10 = document.querySelector("#savebox1-0");
var savebox11 = document.querySelector("#savebox1-1");
var savebox12 = document.querySelector("#savebox1-2");
var savebox13 = document.querySelector("#savebox1-3");
var savebox14 = document.querySelector("#savebox1-4");
var savedHexBox1 = document.querySelector("#saved-hex-box-1");
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
saveButton.addEventListener("click", function(event){
  savePalette();
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
  for(var i=0; i<hexObjects.length; i++){
    if(hexObjects[i].locked === false){
      hexObjects[i].hex = randomHex()
    }
  }
}

function savePalette(){
  // if(savedHexBox1.classList.contains('hidden')){
  // savedHexBox1.classList.remove('hidden');
  savebox10.style.backgroundColor = hexObjects[0].hex;
  savebox11.style.backgroundColor = hexObjects[1].hex;
  savebox12.style.backgroundColor = hexObjects[2].hex;
  savebox13.style.backgroundColor = hexObjects[3].hex;
  savebox14.style.backgroundColor = hexObjects[4].hex;
}

function createNewPalette(){
  cap0.innerText = hexObjects[0].hex;
  cap1.innerText = hexObjects[1].hex;
  cap2.innerText = hexObjects[2].hex;
  cap3.innerText = hexObjects[3].hex;
  cap4.innerText = hexObjects[4].hex;
  box0.style.backgroundColor = hexObjects[0].hex;
  box1.style.backgroundColor = hexObjects[1].hex;
  box2.style.backgroundColor = hexObjects[2].hex;
  box3.style.backgroundColor = hexObjects[3].hex;
  box4.style.backgroundColor = hexObjects[4].hex;
}

function lock0() {
  unlockButton0.hidden = true;
  lockButton0.hidden = false;
  hexObjects[0].locked = true;
}

function unlock0() {
  lockButton0.hidden = true;
  unlockButton0.hidden = false; 
  hexObjects[0].locked = false;
}

function lock1() {
  unlockButton1.hidden = true;
  lockButton1.hidden = false;
  hexObjects[1].locked = true;
}

function unlock1() {
  lockButton1.hidden = true;
  unlockButton1.hidden = false; 
  hexObjects[1].locked = false;
}

function lock2() {
  unlockButton2.hidden = true;
  lockButton2.hidden = false;
  hexObjects[2].locked = true;
}

function unlock2() {
  lockButton2.hidden = true;
  unlockButton2.hidden = false; 
  hexObjects[2].locked = false;
}

function lock3() {
  unlockButton3.hidden = true;
  lockButton3.hidden = false;
  hexObjects[3].locked = true;
}

function unlock3() {
  lockButton3.hidden = true;
  unlockButton3.hidden = false;
  hexObjects[3].locked = false; 
}

function lock4() {
  unlockButton4.hidden = true;
  lockButton4.hidden = false;
  hexObjects[4].locked = true;
}

function unlock4() {
  lockButton4.hidden = true;
  unlockButton4.hidden = false; 
  hexObjects[4].locked = false;
}

// function hideImage() {
//   meditationImage.hidden = true;
// }

// function showImage() {
//   meditationImage.hidden = false;