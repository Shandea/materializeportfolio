// Hide the mission letter to user section

function myFunction() {
    var start = document.getElementById("startText");
    var moreText = document.getElementById("moreText");
    var btnText = document.getElementById("missionBtn");
  
    if (start.style.display === "none") {
      start.style.display = "inline";
      btnText.innerHTML = "+";
      moreText.style.display = "none";
    } else {
      start.style.display = "none";
      btnText.innerHTML = "-";
      moreText.style.display = "inline";
    }
  }