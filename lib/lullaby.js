// const Game = require("./game");
const Display = require("./display");
const sounds = require("./keys");

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementsByTagName("canvas")[0];

  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;

  const ctx = canvasEl.getContext("2d");
  var display = new Display(ctx);
  window.display = display;
  display.start();

  $(document).keydown( function(event) {
    let key = event.originalEvent.keyCode;
    console.log("in lullaby");
    if (sounds.has(key)) {
      var sound = sounds.get(key);
      var soundPlay = new buzz.sound(sound);
      soundPlay.play();
    }
  });
});
