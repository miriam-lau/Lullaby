const Game = require("./game");
const Display = require("./display");

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  console.log("canvasEl");
  console.log(canvasEl);
  // canvasEl.width = Game.DISPLAY_WIDTH;
  // canvasEL.height = Game.DISPLAY_HEIGHT;

  canvasEl.width = 1000;
  console.log(canvasEl);
  canvasEL.height = 800;
  console.log(canvasEl);

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new Display(game, ctx).start();
});
