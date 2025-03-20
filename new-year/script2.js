window.addEventListener("resize", debounce(resizeCanvas, 100), false);
window.addEventListener("DOMContentLoaded", onLoad, false);

window.requestAnimationFrame = 
  window.requestAnimationFrame       || 
  window.webkitRequestAnimationFrame || 
  window.mozRequestAnimationFrame    || 
  window.oRequestAnimationFrame      || 
  window.msRequestAnimationFrame     || 
  function (callback) {
  window.setTimeout(callback, 1000/60);
};

let canvas, ctx, w, h, particles = [], probability = 0.04,
    xPoint, yPoint;

function onLoad() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  resizeCanvas();
  window.requestAnimationFrame(updateWorld);
} 

function resizeCanvas() {
  if (canvas) {
    w = canvas.width = window.innerWidth * window.devicePixelRatio;
    h = canvas.height = window.innerHeight * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
}

function updateWorld() {
  update();
  paint();
  window.requestAnimationFrame(updateWorld);
} 

function update() {
  if (particles.length < 500 && Math.random() < probability) {
    createFirework();
  }
  particles = particles.filter(particle => particle.move());
} 

function paint() {
  ctx.globalCompositeOperation = 'source-over';
  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  particles.forEach(particle => particle.draw(ctx));
} 

function createFirework() {
  xPoint = Math.random() * (w - 200) + 100;
  yPoint = Math.random() * (h - 200) + 100;
  let nFire = Math.random() * 50 + 100;
  let c = `rgb(${~~(Math.random() * 200 + 55)}, ${~~(Math.random() * 200 + 55)}, ${~~(Math.random() * 200 + 55)})`;
  
  for (let i = 0; i < nFire; i++) {
    let particle = new Particle();
    particle.color = c;
    let vy = Math.sqrt(25 - particle.vx * particle.vx);
    if (Math.abs(particle.vy) > vy) {
      particle.vy = particle.vy > 0 ? vy : -vy;
    }
    particles.push(particle);
  }
} 

function Particle() {
  this.w = this.h = Math.random() * 4 + 1;
  this.x = xPoint - this.w / 2;
  this.y = yPoint - this.h / 2;
  this.vx = (Math.random() - 0.5) * 10;
  this.vy = (Math.random() - 0.5) * 10;
  this.alpha = Math.random() * 0.5 + 0.5;
  this.color;
} 

Particle.prototype = {
  gravity: 0.05,
  move: function () {
    this.x += this.vx;
    this.vy += this.gravity;
    this.y += this.vy;
    this.alpha -= 0.01;
    if (this.x <= -this.w || this.x >= w || this.y >= h || this.alpha <= 0) {
      return false;
    }
    return true;
  },
  draw: function (c) {
    c.save();
    c.beginPath();
    c.translate(this.x + this.w / 2, this.y + this.h / 2);
    c.arc(0, 0, this.w, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.globalAlpha = this.alpha;
    c.closePath();
    c.fill();
    c.restore();
  }
} 

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}


document.addEventListener('DOMContentLoaded', () => {
  let yearElement = document.querySelector('.year');
  let msgElement = document.querySelector('.msg');
  let oldYear = document.querySelector('.old');
  let newYear = document.querySelector('.y4.new');
  let firstYearElements = document.querySelectorAll('.first_year span');

  // Function to animate the year change
  function changeYear() {
    // Animate the year change
    firstYearElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.transform = 'scale(1.2)';
        setTimeout(() => {
          el.style.transform = 'scale(1)';
        }, 500);
      }, index * 500);
    });

    // Animate the year numbers changing
    setTimeout(() => {
      oldYear.textContent = '۴';
      newYear.classList.add('new');
    }, 1500);

    // Show the message after year change
    setTimeout(() => {
      msgElement.style.animation = 'fadeIn 1s forwards';
    }, 2000);
  }

  // Change year after a delay
  setTimeout(changeYear, 3000);
});


