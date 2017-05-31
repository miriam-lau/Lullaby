const sounds = require("./keys");


class Game {
  constructor() {

  }

  addSong() {
    console.log("in game add song function");
  }



  playNote() {
    console.log("in game play Note");
    // $(document).keydown( function(event) {
    //   if (event.which === 65) {
    //     var sound = sounds.get(event);
    //     var soundPlay = new buzz.sound(sound);
    //     soundPlay.play();
    //   }
    // });
    // this.onKeyDown = add.EventListener
    // this.onKeyUp = add.EventListener
  }
};

Game.DISPLAY_WIDTH = window.innerWidth;
Game.DISPLAY_HEIGHT = window.innerHeight;

module.exports = Game;
