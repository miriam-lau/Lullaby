const Display = require("./display");
const sounds = require("./keys");
import anime from "animejs";

let canvasEl;
let ctx;
let cH;
let cW;
let animations;
let circles;
let animate;

document.addEventListener("DOMContentLoaded", function() {
  canvasEl = document.getElementById("canvas");

  canvasEl.width = window.innerWidth - 300;
  canvasEl.height = window.innerHeight;

  ctx = canvasEl.getContext("2d");
  let display = new Display(ctx);
  window.display = display;
  display.start();

  $(document).keydown( function(event) {
    let key = event.originalEvent.keyCode;
    if (sounds.has(key)) {
      let sound = sounds.get(key);
      let soundPlay = new buzz.sound(sound);
      soundPlay.play();
      handleEvent();
    }
  });

  animations = [];
  circles = [];

  (function init() {
    resizeCanvas();
    if (window.CP) {
      // To address- CodePen's loop detection issues
      window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;
    }
    window.addEventListener("resize", resizeCanvas);

    if (!!window.location.pathname.match(/fullcpgrid/)) {
      startFauxClicking();
    }
    cW = window.innerWidth;
    cH = window.innerHeight;
  })();

  animate = anime({
    duration: Infinity,
    update: function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animations.forEach(function(anim) {
        anim.animatables.forEach(function(animatable) {
          animatable.target.draw();
        });
      });
    }
  });
});

function removeAnimation(animation) {
  let index = animations.indexOf(animation);
  if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
  let l = Math.max(x - 0, cW - x);
  let h = Math.max(y - 0, cH - y);
  return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function handleEvent() {
  let xCoord = Math.random() * (cW - 300);
  let yCoord = Math.random() * cH;

  while ((xCoord >= 540 && xCoord <= 960) && (yCoord >= 190 && yCoord <= 735)) {
    xCoord = Math.random() * (cW - 300);
    yCoord = Math.random() * cH;
  }

  let color = "white";
  let targetR = calcPageFillRadius(xCoord, yCoord);
  let rippleSize = Math.min(50, (cW * .4));
  let minCoverDuration = 750;

  let particles = [];
  for (let i=0; i<32; i++) {
    let particle = new Circle({
      x: xCoord,
      y: yCoord,
      fill: color,
      r: anime.random(1, 5)
    })
    particles.push(particle);
  }

  for (let i = 0; i < 3; i++) {
    let particlesAnimation = anime({
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
}

function extend(a, b){
  for (let key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
}

let Circle = function(opts) {
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

let resizeCanvas = function() {
  cW = window.innerWidth;
  cH = window.innerHeight;
  canvasEl.width = cW - 300;
  canvasEl.height = cH;
  $('#song-display').css({'left': parseInt((window.innerWidth/ 2) - 50) });
  $('div.logo').css({'left': parseInt(window.innerWidth/ 2)
  });
};

function startFauxClicking() {
  setTimeout(function(){
    fauxClick(anime.random( cW * .2, cW * .8), anime.random(cH * .2, cH * .8));
    startFauxClicking();
  }, anime.random(200, 900));
}

function fauxClick(x, y) {
  let fauxClick = new Event("mousedown");
  fauxClick.pageX = x;
  fauxClick.pageY = y;
  document.dispatchEvent(fauxClick);
}
