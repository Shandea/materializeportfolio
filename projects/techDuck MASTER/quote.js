//Quote Generator

function quoteGenerator() {
    var a;
    a = document.getElementById("quoteArea");
    a.innerHTML = '"Strive not to be a success, but rather to be of value."<br><p style="font-size: 25px">Albert Einstein';
    setTimeout(function () {
      a.innerHTML = '"When I let go of what I am, I become what I might be."<br><p style="font-size: 25px">Lao Tzu'
    }, 10000);
    setTimeout(function () {
      a.innerHTML = '"The question isn’t who is going to let me; it’s who is going to stop me."<br><p style="font-size: 25px">Ayn Rand';
    }, 20000);
    setTimeout(function () {
      a.innerHTML = '"It is never too late to be what you might have been."<br><p style="font-size: 25px">George Eliot';
    }, 30000);
    setTimeout(function () {
      a.innerHTML = '"The only way to do great work is to love what you do."<br><p style="font-size: 25px">Steve Jobs';
    }, 40000);
    setTimeout(function () {
      a.innerHTML = '"Strive not to be a success, but rather to be of value."<br><p style="font-size: 25px">Albert Einstein';
    }, 50000);
  }
  quoteGenerator();
  setInterval(quoteGenerator, 60000);