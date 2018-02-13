var count = 0, stopButton, startButton, interval;

var cycle = function () {
  document.querySelectorAll(".hero")[count].classList.remove("active");
  if (count < heroes.length -1) {
    count++;
  } else {
    count = 0;
  }

  document.querySelectorAll(".hero")[count].classList.add("active");
};

document.addEventListener('DOMContentLoaded', function () {

  document.onkeyup = function(e) {
  if(e.code === "Space") {
    if (startButton.classList.contains("active")) {
      startButton.classList.remove("active");
      stopButton.classList.add("active");
      if (!!document.querySelector(".hero.selected")) {
        document.querySelector(".hero.selected").classList.remove("selected");
        document.querySelector(".hero.active").classList.remove("active");
      }
      count = 0;
      interval = setInterval(cycle, 300);
    } else {
      stopButton.classList.remove("active");
      startButton.classList.add("active");

      clearInterval(interval);
      interval = null;

      document.querySelectorAll(".hero")[count].classList.add("selected");
    }
    e.preventDefault();
    return;
  }
}
  startButton = document.querySelector(".button.start");
  stopButton = document.querySelector(".button.stop");
  var html = "", hero;
  for (var i = 0; i < heroes.length; i++) {
    hero = heroes[i];
    html += "<div class='hero'>";
    html += "<div class='name'>" + hero.name + "</div>";
    html += "<img src='"+ hero.img + "'/>";
    html += "<div class='text'>" + hero.text + "</div>";
    html += "</div>";
  };
  document.querySelector(".heroes").innerHTML = html;



  startButton.addEventListener('click', function (e) {
    startButton.classList.remove("active");
    stopButton.classList.add("active");
    document.querySelector(".hero.selected").classList.remove("selected");
    document.querySelector(".hero.active").classList.remove("active");
    count = 0;
    interval = setInterval(cycle, 300);
  });

  stopButton.addEventListener('click', function (e) {
    stopButton.classList.remove("active");
    startButton.classList.add("active");

    clearInterval(interval);
    interval = null;

    document.querySelectorAll(".hero")[count].classList.add("selected");
  });
});