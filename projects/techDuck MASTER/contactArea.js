function contactAreaGenerator() {
    var b;
    b = document.getElementById("feedbackArea");
    b.innerHTML = "Questions?";
    setTimeout(function () {
      b.innerHTML = "Comments?"
    }, 7000);
    setTimeout(function () {
        b.innerHTML = "We would love your feedback!"
      }, 14000);
      setTimeout(function () {
        b.innerHTML = "Questions?"
      }, 21000);
      setTimeout(function () {
        b.innerHTML = "Comments?"
      }, 28000);
      setTimeout(function () {
        b.innerHTML = "We would love to hear from you!"
      }, 35000);
      setTimeout(function () {
        b.innerHTML = "Questions?"
      }, 42000);
      setTimeout(function () {
        b.innerHTML = "Comments?"
      }, 35000);
      setTimeout(function () {
        b.innerHTML = "We would love to hear from you!"
      }, 35000);
      
  }

  contactAreaGenerator();
  setInterval(contactAreaGenerator, 50000);