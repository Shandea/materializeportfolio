// FAQ Modal

var modal = document.getElementById('myModal');
var btn = document.getElementById("faqBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Collapsible FAQ Question

var coll = document.getElementsByClassName("collapsible");
var k;

for (k = 0; k < coll.length; k++) {
  coll[k].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}