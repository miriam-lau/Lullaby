const songs = require("./songs");
const anime = require('animejs');

const songTitle = new Map();
songTitle.set("1", "Are You Sleeping?");
songTitle.set("2", "Baa Baa Black Sheep");
songTitle.set("3", "Baby Mine");
songTitle.set("4", "Brahm's Lullaby");
songTitle.set("5", "Hush Little Baby");
songTitle.set("6", "Rock-A-Bye Baby");
songTitle.set("7", "Somewhere Over The Rainbow");
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
  }

  showSong(value) {
    $(document.getElementById('song-display')).removeClass('active');
    $(document.getElementById('song-display')).addClass('active');

    let currentSong = songs.get(value.value);
    let currentSongTitle = songTitle.get(value.value);
    document.getElementById('song-notes').innerHTML = "";

    let sentence = "";
    sentence += "<h3 class=\"song-title\">" + currentSongTitle + "</h3>";
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
