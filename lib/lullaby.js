const Game = require("./game");
const Display = require("./display");

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = Game.DISPLAY_WIDTH;
  canvasEL.height = Game.DISPLAY_HEIGHT;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new Display(game, ctx).start();
});
