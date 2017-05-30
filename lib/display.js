// background is a night sky with mini-stars
// when user key presses, a spark across the screen

const Display = function(game, ctx) {
  this.ctx = ctx;
  this.game = game;
  this.song = this.game.addSong();
}
