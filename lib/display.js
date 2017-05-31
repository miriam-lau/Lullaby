// background is a night sky with mini-stars
// when user key presses, a spark across the screen

const songs = require("./songs");
// const Game = require("./game");

class Display {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.song = this.game.addSong();
  }

  start() {
    console.log("in display start function");
  }

  showSong(value) {
    console.log("in display show Song");
    console.log(value.value);
    let currentSong = songs.get(value.value);
    console.log(currentSong);
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    let yPos = 100;
    this.ctx.font = "30px Arial";
    for (var i = 0; i < currentSong.length; i++) {
      this.ctx.fillText(currentSong[i], (window.innerWidth/2), yPos);
      this.ctx.textAlign="center";
      yPos += 50
    }
    // Game.playNote();
  }
}

module.exports = Display;

// using audio html tag

// $( document).ready(function() {
//   // what will happen when click play button
//   $('.spinner-wrap').click(function() {
//     // caching a variable, instead of looking into the DOM
//     // to figure out what 'this' is everytime
//     var $this = $(this),
//       // identify the source aka the song within the audio tag
//       // the audio tag is a sibling of what click need 'siblings'
//       // that have a tag of 'audio' with index of 0.
//       audio = $this.siblings('audio')[0];
//
//     // when hit play again it will start from the beginning
//     if (audio.paused === false) {
//       audio.pause();
//       audio.currentTime = 0;
//       $this.removeClass('playing');
//     } else {
//       // use audio var and initiate play
//       audio.play();
//       // when playing audio, add a class to spinner-wrap, now when
//       // click on it the spinner-wrap html el will show 'playing'
//       $this.addClass('playing');
//     }
//   });
//
// });

// in css file, if html class is .playing set the stop button image
