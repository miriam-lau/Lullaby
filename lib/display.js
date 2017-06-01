const songs = require("./songs");

const songTitle = new Map();
songTitle.set("1", "Are You Sleeping?");
songTitle.set("2", "Baa Baa Black Sheep");
songTitle.set("3", "Baby Mine");
songTitle.set("4", "Brahms Lullaby");
songTitle.set("5", "Hush Little Baby");
songTitle.set("6", "Rock-A-Bye Baby");
songTitle.set("7", "Somewhere Over TheRainbow");
songTitle.set("8", "Twinkle Twinkle Little Star");


class Display {
  constructor(ctx) {
    this.ctx = ctx;
  }

  start() {
    console.log("in display start function");
  }

  removeSong(value) {
    $(document.getElementById('song-display')).removeClass('active');
    let currentSong = songs.get(value.value);
    let currentSongTitle = songTitle.get(value.value);
    document.getElementById('song-notes').innerHTML = "";
    // $(document.getElementById('song-notes')).addClass('active');

    let sentence = "";
    // sentence += "<h3 class=\"songTitle\">" + currentSongTitle + "</h3>";
    // for (var i = 0; i < currentSong.length; i++) {
    //   sentence += "<div class=\"song-line\">";
    //   for (var j = 0; j < currentSong[i].length; j++) {
    //     sentence += "<span class=\"song-letter\">" + currentSong[i][j] + "</span>";
    //   }
    //   sentence += "</div>";
    // }
    // document.getElementById('song-notes').innerHTML = sentence;
  }

  showSong(value) {
    $(document.getElementById('song-display')).removeClass('active');
    $(document.getElementById('song-display')).addClass('active');

    let currentSong = songs.get(value.value);
    let currentSongTitle = songTitle.get(value.value);
    document.getElementById('song-notes').innerHTML = "";

    let sentence = "";
    sentence += "<h3 class=\"songTitle\">" + currentSongTitle + "</h3>";
    for (var i = 0; i < currentSong.length; i++) {
      sentence += "<div class=\"song-line\">";
      for (var j = 0; j < currentSong[i].length; j++) {
        sentence += "<span class=\"song-letter\">" + currentSong[i][j] + "</span>";
      }
      sentence += "</div>";
    }
    document.getElementById('song-notes').innerHTML = sentence;
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
