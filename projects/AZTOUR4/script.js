// get the Az modal
var modalAz = document.getElementById("modalAz");
// get button that opens State Map modal
var smallAzBtn = document.getElementById("smallAzBtn");


// get the Tombstone modal
var modal1 = document.getElementById("modal1");
// get button that opens Tombstone modal
var button1 = document.getElementById("button1");
// get the Grand Canyon modal
var modal2 = document.getElementById("modal2");
// get button that opens Grand Canyon modal
var button2 = document.getElementById("button2");
// get the Colossal Caves modal
var modal3 = document.getElementById("modal3");
// get button that opens Colossal Caves modal
var button3 = document.getElementById("button3");
// get the Kartchner Caverns modal
var modal4 = document.getElementById("modal4");
// get button that opens Kartchner Caverns modal
var button4 = document.getElementById("button4");
// get the  Chiricahua National Monument modal
var modal5 = document.getElementById("modal5");
// get button that opens Chiricahua National Monument modal
var button5 = document.getElementById("button5");


// open State Map modal when button clicked
smallAzBtn.onclick = function () {
    modalAz.style.display = "block";
}
// open Tombstone modal when button clicked
button1.onclick = function () {
    modal1.style.display = "block";
}
// open Grand Canyon modal when button is clicked
button2.onclick = function () {
    modal2.style.display = "block";
}
// open Colossal Caves modal when button is clicked
button3.onclick = function () {
    modal3.style.display = "block";
}
// open Kartchner Caverns modal when button is clicked
button4.onclick = function () {
    modal4.style.display = "block";
}
// open Chiricahua National Monument modal when button is clicked
button5.onclick = function () {
    modal5.style.display = "block";
}

