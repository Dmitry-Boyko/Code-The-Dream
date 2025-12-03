const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

//planet configs
let angleBlue = 0;
let angleRed = 0;

//let angle = 0; // starting angle
const blueOrbit = 150; // dist from sun
const blueSpeed = 0.02; // blue speed

const redOrbit = 100; // dist from sun
const redSpeed = 0.04; // red speed

function orbits() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // This is a glow effect and sun
  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    30,
    centerX,
    centerY,
    70
  );
  gradient.addColorStop(0, "yellow"); // center
  gradient.addColorStop(0.5, "orange"); // middle
  gradient.addColorStop(1, "transparent"); // fading

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#F9BB2B"; // => hot temperature color
  ctx.fill();

  // ------------ //  bluePlanet traicing
  const blueX = centerX + blueOrbit * Math.cos(angleBlue);
  const blueY = centerY + blueOrbit * Math.sin(angleBlue);

  ctx.beginPath();
  ctx.arc(centerX, centerY, blueOrbit, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(blueX, blueY, 15, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();

  // ------------ // redPlanet traicing
  const redX = centerX + redOrbit * Math.cos(angleRed);
  const redY = centerY + redOrbit * Math.sin(angleRed);

  ctx.beginPath();
  ctx.arc(centerX, centerY, redOrbit, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(redX, redY, 15, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();

  // Update angle
  angleBlue += blueSpeed;
  angleRed += redSpeed;

  requestAnimationFrame(orbits);
}

orbits();
