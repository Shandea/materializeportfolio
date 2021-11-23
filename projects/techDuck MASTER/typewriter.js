// Typewriter text on homepage for "Resume Creator" text

var i = 0;
var txt = 'RESUME CREATOR';
var speed = 600;
var myVar = setInterval(typeWriter, 500);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("resumeCreatorTitle").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
