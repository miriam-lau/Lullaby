const Game = require("./game");
const Display = require("./display");
const sounds = require("./keys");

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementsByTagName("canvas")[0];

  canvasEl.width = Game.DISPLAY_WIDTH;
  canvasEl.height = Game.DISPLAY_HEIGHT;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  var display = new Display(game, ctx);
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
    // if (event.which === 65) {
    //   var sound = sounds.get(65);
    //   console.log("in lullaby keydown");
    //   console.log(sound);
    //   console.log(event);
    //   var soundPlay = new buzz.sound(sound);
    //   soundPlay.play();
    // }
  });
});
