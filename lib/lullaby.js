const Display = require("./display");
const sounds = require("./keys");
import anime from "animejs";
// const animation = require("./animation");

// function test() {
//   anime({
//     targets: 'div',
//     translateX: [
//       { value: 100, duration: 1200 },
//       { value: 0, duration: 800 }
//     ],
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 2000,
//     loop: false
//   });
// }
var canvasEl;
var ctx;
var cH;
var cW;
// var bgColor;
var animations;
var circles;
// var colorPicker;
var animate;
document.addEventListener("DOMContentLoaded", function() {
  canvasEl = document.getElementById("canvas");

  canvasEl.width = window.innerWidth - 300;
  canvasEl.height = window.innerHeight;

  ctx = canvasEl.getContext("2d");
  var display = new Display(ctx);
  window.display = display;
  display.start();

  $(document).keydown( function(event) {
    let key = event.originalEvent.keyCode;
    console.log("in lullaby");
    if (sounds.has(key)) {
      var sound = sounds.get(key);
      var soundPlay = new buzz.sound(sound);
      soundPlay.play();
      handleEvent();
    }
  });

  //  bgColor = "#FF6138";
   animations = [];
  circles = [];

  //  colorPicker = (function() {
  //   var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];
  //   var index = 0;
  //   function next() {
  //     index = index++ < colors.length-1 ? index : 0;
  //     return colors[index];
  //   }
  //   function current() {
  //     return colors[index]
  //   }
  //   return {
  //     next: next,
  //     current: current
  //   }
  // })();


  (function init() {
    //resizeCanvas();
    if (window.CP) {
      // CodePen's loop detection was causin' problems
      // and I have no idea why, so...
      window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
    }
    //window.addEventListener("resize", resizeCanvas);
    //addClickListeners();
    if (!!window.location.pathname.match(/fullcpgrid/)) {
      startFauxClicking();
    }
    // handleInactiveUser();
    cW = window.innerWidth;
    cH = window.innerHeight;
    console.log('cw' + window.innerWidth);
    console.log('ch' + window.innerHeight);

  })();

   animate = anime({
    duration: Infinity,
    update: function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //ctx.fillStyle = bgColor;
      //ctx.fillRect(0, 0, cW, cH);
      animations.forEach(function(anim) {
        anim.animatables.forEach(function(animatable) {
          animatable.target.draw();
        });
      });
    }
  });
});



function removeAnimation(animation) {
  var index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  var l = Math.max(x - 0, cW - x);
  var h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}
/*
function addClickListeners() {
  document.addEventListener("touchstart", handleEvent);
  document.addEventListener("mousedown", handleEvent);
};
*/
function handleEvent() {
    var xCoord = Math.random() * (cW - 300);
    var yCoord = Math.random() * cH;
    var color = "white";
    // var nextColor = "white";
    var targetR = calcPageFillRadius(xCoord, yCoord);
    var rippleSize = Math.min(50, (cW * .4));
    var minCoverDuration = 750;

    console.log(xCoord);
    console.log(yCoord);
    var particles = [];
    for (var i=0; i<32; i++) {
      var particle = new Circle({
        x: xCoord,
        y: yCoord,
        fill: color,
        r: anime.random(1, 5)
      })
      particles.push(particle);
    }
    var particlesAnimation = anime({
      targets: particles,
      x: function(particle){
        return particle.x + anime.random(rippleSize, -rippleSize);
      },
      y: function(particle){
        return particle.y + anime.random(rippleSize * 1.15, -rippleSize * 1.15);
      },
      r: 0,
      easing: "easeOutExpo",
      duration: anime.random(1000,1300),
      speed: 0.5,
      complete: removeAnimation
    });
    animations.push(particlesAnimation);
}

function extend(a, b){
  for(var key in b) {
    if(b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

var Circle = function(opts) {
  extend(this, opts);
}

Circle.prototype.draw = function() {
  ctx.globalAlpha = this.opacity || 1;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
  if (this.stroke) {
    ctx.strokeStyle = this.stroke.color;
    ctx.lineWidth = this.stroke.width;
    ctx.stroke();
  }
  if (this.fill) {
    ctx.fillStyle = this.fill;
    ctx.fill();
  }
  ctx.closePath();
  ctx.globalAlpha = 1;
}

var resizeCanvas = function() {
  cW = window.innerWidth;
  cH = window.innerHeight;
  c.width = cW * devicePixelRatio;
  c.height = cH * devicePixelRatio;
  ctx.scale(devicePixelRatio, devicePixelRatio);
};

// function handleInactiveUser() {
//   var inactive = setTimeout(function(){
//     fauxClick(cW/2, cH/2);
//   }, 2000);
//
//   function clearInactiveTimeout() {
//     clearTimeout(inactive);
//     document.removeEventListener("mousedown", clearInactiveTimeout);
//     document.removeEventListener("touchstart", clearInactiveTimeout);
//   }
//
//   document.addEventListener("mousedown", clearInactiveTimeout);
//   document.addEventListener("touchstart", clearInactiveTimeout);
// }

function startFauxClicking() {
  setTimeout(function(){
    fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }, anime.random(200, 900));
}

function fauxClick(x, y) {
  var fauxClick = new Event("mousedown");
  fauxClick.pageX = x;
  fauxClick.pageY = y;
  document.dispatchEvent(fauxClick);
}
