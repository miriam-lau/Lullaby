/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// background is a night sky with mini-stars
// when user key presses, a spark across the screen

const songs = __webpack_require__(3);

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
    this.ctx.clearRect(0, 0, 1000, 800);
    let yPos = 100;
    this.ctx.font = "30px Arial";
    for (var i = 0; i < currentSong.length; i++) {
      this.ctx.fillText(currentSong[i], 100, yPos);
      yPos += 50
    }
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const sounds = __webpack_require__(4);


class Game {
  constructor() {

  }

  addSong() {
    console.log("in game add song function");
  }



  playNote() {
    console.log("in game play Note");
    $(document).keydown( function(event) {
      if (event.which === 65) {
        var soundPlay = new buzz.sound(event);
        soundPlay.play();
      }
    });
    // this.onKeyDown = add.EventListener
    // this.onKeyUp = add.EventListener
  }
};

Game.DISPLAY_WIDTH = 1000;
Game.DISPLAY_HEIGHT = 800;

module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(1);
const Display = __webpack_require__(0);

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementsByTagName("canvas")[0];

  canvasEl.width = Game.DISPLAY_WIDTH;
  canvasEl.height = Game.DISPLAY_HEIGHT;

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  var display = new Display(game, ctx);
  window.display = display;
  display.start();
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const AreYouSleeping = [
  ['a', 's', 'd', 'a', '', 'a', 's', 'd', 'a'],
  ['d', 'f', 'j', '', 'd', 'f', 'j'],
  ['j', 'k', 'j', 'f', 'd', 'a', '', 'j', 'k', 'j', 'f', 'd', 'a'],
  ['a', 'j', 'a', '', 'a', 'j', 'a'] ];

const BaaBaaBlackSheep = [
  ['a', 'a', 'j', 'j', 'k', 'k', 'k', 'k', 'j'],
  ['f', 'f', 'd', 'd', 's', 's', 'a'],
  ['a', 'a', 'a', 'j', 'j', 'k', 'k', 'k', 'j'],
  ['f', 'f', 'f', 'd', 'd', 'd', 'd', 's', 's', 's', 'a'] ];

const BabyMine = [
  ['d', 'j', 'd', 's', 'a', 's'],
  ['d', 'j', 'd', 's', 'a', 's'],
  ['k', ';', 'k', 'f', 'j', 'k', 's'],
  ['s', 'd', 'f', 'r', 'r', 'a', 's', 'a'] ];

const BrahmsLullaby = [
  ['d', 'd', 'j', 'd', 'd', 'j'],
  ['d', 'j', ';', 'l', 'k', 'k', 'j'],
  ['s', 'd', 'f', 's', 's', 'd', 'f'],
  ['s', 'f', 'l', 'k', 'j', 'l', 'a'],
  ['a', 'a', ';', 'k', 'f', 'j', '', 'd', 'a', 'f', 'j', 'k', 'd', 'j'],
  ['a', 'a', ';', 'k', 'f', 'j', '', 'd', 'a', 'f', 'j', 'f', 'd', 's', 'a']];

const HushLittleBaby = [
  ['s', 'l', 'l', ';', 'l', 'k', 'k', 'k', 'k'],
  ['s', 's', 'k', 'k', 'k', 'k', 'l', 'k', 'j', 'j'],
  ['s', 'l', 'l', ';', 'l', 'k', 'k'],
  ['s', 's', 'k', 'k', 'k', 'k', 'l', 'k', 'j', 'j'] ];

const RockAByeBaby = [
  ['d', 'j', 'o', 'i', ';', 'd', 'j', ';', 'l'],
  ['f', 'j', 'p', 'o', 'i', 'i', ';', 'k', 'j'],
  ['d', 'j', 'o', 'i', ';', 'd', 'j', ';', 'l', 'k'],
  ['j', ';', 'p', 'o', ';', 'i', 'k', 'l', ';'] ];

const SomewhereOverTheRainbow = [
  ['a', ';', 'l', 'j', 'k', 'l', ';'],
  ['a', 'k', 'j'],
  ['e', 'f', 'd', 'a', 's', 'd'],
  ['f', 's', 'r', 'a', 's', 'd', 'a'] ];

const TwinkleTwinkleLittleStar = [
  ['a', 'a', 'j', 'j', 'k', 'k', 'j'],
  ['f', 'f', 'd', 'd', 's', 's', 'a'],
  ['j', 'j', 'f', 'f', 'd', 'd', 's'],
  ['j', 'j', 'f', 'f', 'd', 'd', 's'],
  ['a', 'a', 'j', 'j', 'k', 'k', 'j'],
  ['f', 'f', 'd', 'd', 's', 's', 'a'] ];

const songs = new Map();
songs.set("1", AreYouSleeping);
songs.set("2", BaaBaaBlackSheep);
songs.set("3", BabyMine);
songs.set("4", BrahmsLullaby);
songs.set("5", HushLittleBaby);
songs.set("6", RockAByeBaby);
songs.set("7", SomewhereOverTheRainbow);
songs.set("8", TwinkleTwinkleLittleStar);

// Source: youtube


module.exports = songs;


/***/ }),
/* 4 */
/***/ (function(module, exports) {


buzz.defaults.formats = ['wav'];
buzz.defaults.preload = 'auto';


const notesToKeys = newMap();
  notesToKeys.set("C4", "a");
  notesToKeys.set("D4", "s");
  notesToKeys.set("E4", "d");
  notesToKeys.set("F4", "f");
  notesToKeys.set("G4", "j");
  notesToKeys.set("A4", "k");
  notesToKeys.set("B4", "l");
  notesToKeys.set("C5", ";");
  notesToKeys.set("G3", "w");
  notesToKeys.set("A3", "e");
  notesToKeys.set("B3", "r");
  notesToKeys.set("D5", "i");
  notesToKeys.set("E5", "o");
  notesToKeys.set("F5", "p");

const keyCodes = newMap();
  keyCodes.set("a", 65);
  keyCodes.set("s", 83);
  keyCodes.set("d", 68);
  keyCodes.set("f", 70);
  keyCodes.set("j", 74);
  keyCodes.set("k", 75);
  keyCodes.set("l", 76);
  keyCodes.set(";", 186);
  keyCodes.set("w", 87);
  keyCodes.set("e", 69);
  keyCodes.set("r", 82);
  keyCodes.set("i", 73);
  keyCodes.set("o", 79);
  keyCodes.set("p", 80);

const sounds = newMap();
sounds.set(65, ['./sounds/40_C4']);
sounds.set(83, ['./sounds/42_D4']);
sounds.set(68, ['./sounds/44_E4']);
sounds.set(70, ['./sounds/45_F4']);
sounds.set(74, ['./sounds/47_G4']);
sounds.set(75, ['./sounds/49_A4']);
sounds.set(76, ['./sounds/51_B4']);
sounds.set(186, ['./sounds/52_C5']);
sounds.set(87, ['./sounds/35_G3']);
sounds.set(69, ['./sounds/37_A3']);
sounds.set(82, ['./sounds/39_B3']);
sounds.set(73, ['./sounds/54_D5']);
sounds.set(79, ['./sounds/56_E5']);
sounds.set(80, ['./sounds/57_F5']);

module.exports = sounds;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map