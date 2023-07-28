//Update data model so we can access hex codes in squares and captions

//DATA MODEL

var hexObjects = [
  {hex: "#EA9999", locked: false},
  {hex: "#FACB9C", locked: false},
  {hex: "#FFE59A", locked: false},
  {hex: "#B6D7A8", locked: false},
  {hex: "#A4C4CA", locked: false}
]

var savedPalettes = [];

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
var savebox20 = document.querySelector("#savebox2-0");
var savebox21 = document.querySelector("#savebox2-1");
var savebox22 = document.querySelector("#savebox2-2");
var savebox23 = document.querySelector("#savebox2-3");
var savebox24 = document.querySelector("#savebox2-4");
var savebox30 = document.querySelector("#savebox3-0");
var savebox31 = document.querySelector("#savebox3-1");
var savebox32 = document.querySelector("#savebox3-2");
var savebox33 = document.querySelector("#savebox3-3");
var savebox34 = document.querySelector("#savebox3-4");
var savebox40 = document.querySelector("#savebox4-0");
var savebox41 = document.querySelector("#savebox4-1");
var savebox42 = document.querySelector("#savebox4-2");
var savebox43 = document.querySelector("#savebox4-3");
var savebox44 = document.querySelector("#savebox4-4");
var savebox50 = document.querySelector("#savebox5-0");
var savebox51 = document.querySelector("#savebox5-1");
var savebox52 = document.querySelector("#savebox5-2");
var savebox53 = document.querySelector("#savebox5-3");
var savebox54 = document.querySelector("#savebox5-4");
var savebox60 = document.querySelector("#savebox6-0");
var savebox61 = document.querySelector("#savebox6-1");
var savebox62 = document.querySelector("#savebox6-2");
var savebox63 = document.querySelector("#savebox6-3");
var savebox64 = document.querySelector("#savebox6-4");
var savebox70 = document.querySelector("#savebox7-0");
var savebox71 = document.querySelector("#savebox7-1");
var savebox72 = document.querySelector("#savebox7-2");
var savebox73 = document.querySelector("#savebox7-3");
var savebox74 = document.querySelector("#savebox7-4");

var savedHexBox1 = document.querySelector(".saved-hex-box-1");
var savedHexBox2 = document.querySelector(".saved-hex-box-2");
var savedHexBox3 = document.querySelector(".saved-hex-box-3");
var savedHexBox4 = document.querySelector(".saved-hex-box-4");
var savedHexBox5 = document.querySelector(".saved-hex-box-5");
var savedHexBox6 = document.querySelector(".saved-hex-box-6");
var savedHexBox7 = document.querySelector(".saved-hex-box-7");
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
if(savedHexBox1.classList.contains('hidden')){
savedHexBox1.classList.remove('hidden');
var savedHex0 = {
    box0: hexObjects[0].hex,
    box1: hexObjects[1].hex,
    box2: hexObjects[2].hex,
    box3: hexObjects[3].hex, 
    box4: hexObjects[4].hex,
    }
savebox10.style.backgroundColor = savedHex0.box0;
savebox11.style.backgroundColor = savedHex0.box1;
savebox12.style.backgroundColor = savedHex0.box2;
savebox13.style.backgroundColor = savedHex0.box3;
savebox14.style.backgroundColor = savedHex0.box4;
savedPalettes.push(savedHex0);
} else if(savedHexBox2.classList.contains('hidden')){
    savedHexBox2.classList.remove('hidden');
var savedHex1 = {
    box0: hexObjects[0].hex,
    box1: hexObjects[1].hex,
    box2: hexObjects[2].hex,
    box3: hexObjects[3].hex, 
    box4: hexObjects[4].hex,
    }
savebox20.style.backgroundColor = savedHex1.box0;
savebox21.style.backgroundColor = savedHex1.box1;
savebox22.style.backgroundColor = savedHex1.box2;
savebox23.style.backgroundColor = savedHex1.box3;
savebox24.style.backgroundColor = savedHex1.box4;
savedPalettes.push(savedHex1);
} else if(savedHexBox3.classList.contains('hidden')){
    savedHexBox3.classList.remove('hidden');
var savedHex2 = {
    box0: hexObjects[0].hex,
    box1: hexObjects[1].hex,
    box2: hexObjects[2].hex,
    box3: hexObjects[3].hex, 
    box4: hexObjects[4].hex,
    }
savebox30.style.backgroundColor = savedHex2.box0;
savebox31.style.backgroundColor = savedHex2.box1;
savebox32.style.backgroundColor = savedHex2.box2;
savebox33.style.backgroundColor = savedHex2.box3;
savebox34.style.backgroundColor = savedHex2.box4;
savedPalettes.push(savedHex2);
} else if(savedHexBox4.classList.contains('hidden')){
    savedHexBox4.classList.remove('hidden');
var savedHex3 = {
    box0: hexObjects[0].hex,
    box1: hexObjects[1].hex,
    box2: hexObjects[2].hex,
    box3: hexObjects[3].hex, 
    box4: hexObjects[4].hex,
    }
savebox40.style.backgroundColor = savedHex3.box0;
savebox41.style.backgroundColor = savedHex3.box1;
savebox42.style.backgroundColor = savedHex3.box2;
savebox43.style.backgroundColor = savedHex3.box3;
savebox44.style.backgroundColor = savedHex3.box4;
savedPalettes.push(savedHex3);
} else if(savedHexBox5.classList.contains('hidden')){
    savedHexBox5.classList.remove('hidden');
var savedHex4 = {
    box0: hexObjects[0].hex,
    box1: hexObjects[1].hex,
    box2: hexObjects[2].hex,
    box3: hexObjects[3].hex, 
    box4: hexObjects[4].hex,
    }
savebox50.style.backgroundColor = savedHex4.box0;
savebox51.style.backgroundColor = savedHex4.box1;
savebox52.style.backgroundColor = savedHex4.box2;
savebox53.style.backgroundColor = savedHex4.box3;
savebox54.style.backgroundColor = savedHex4.box4;
savedPalettes.push(savedHex4);
} else if(savedHexBox6.classList.contains('hidden')){
    savedHexBox6.classList.remove('hidden');
var savedHex5 = {
    box0: hexObjects[0].hex,
    box1: hexObjects[1].hex,
    box2: hexObjects[2].hex,
    box3: hexObjects[3].hex, 
    box4: hexObjects[4].hex,
    }
savebox60.style.backgroundColor = savedHex5.box0;
savebox61.style.backgroundColor = savedHex5.box1;
savebox62.style.backgroundColor = savedHex5.box2;
savebox63.style.backgroundColor = savedHex5.box3;
savebox64.style.backgroundColor = savedHex5.box4;
savedPalettes.push(savedHex5);
}
// } else if(savedHexBox7.classList.contains('hidden')){
//   savedHexBox7.classList.remove('hidden');
// var savedHex6 = {
//   box0: hexObjects[0].hex,
//   box1: hexObjects[1].hex,
//   box2: hexObjects[2].hex,
//   box3: hexObjects[3].hex, 
//   box4: hexObjects[4].hex,
//   }
// savebox70.style.backgroundColor = savedHex6.box0;
// savebox71.style.backgroundColor = savedHex6.box1;
// savebox72.style.backgroundColor = savedHex6.box2;
// savebox73.style.backgroundColor = savedHex6.box3;
// savebox74.style.backgroundColor = savedHex6.box4;
// }

//   savebox10.style.backgroundColor = hexObjects[0].hex;
//   savebox11.style.backgroundColor = hexObjects[1].hex;
//   savebox12.style.backgroundColor = hexObjects[2].hex;
//   savebox13.style.backgroundColor = hexObjects[3].hex;
//   savebox14.style.backgroundColor = hexObjects[4].hex;
// }
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