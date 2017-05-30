// background is a night sky with mini-stars
// when user key presses, a spark across the screen

class Display {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.song = this.game.addSong();
  }

  start() {
    console.log("in display start function");
  }
}

module.exports = Display;
