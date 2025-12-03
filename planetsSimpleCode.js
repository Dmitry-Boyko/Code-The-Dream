const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

// planet configs
let angleBlue = 0;
let angleRed = 0;

// Speeds (radians per frame)
const blueSpeed = 0.02;
const redSpeed = 0.03;

// Elliptical Blue planet orbit parameters
const ellipseBlueOrbitRadiusX = 200; // horizontal radius (semi-major axis)
const ellipseBlueOrbitRadiusY = 130; // vertical radius (semi-minor axis)

// Elliptical Red planet orbit parameters
const ellipseRedOrbitRadiusX = 160; // horizontal radius (semi-major axis)
const ellipseRedOrbitRadiusY = 90; // vertical radius (semi-minor axis)

function orbits() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Glow effect and sun
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

  ctx.beginPath();
  ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
  ctx.fillStyle = "#F9BB2B"; // hot temperature color
  ctx.fill();

  // ------------ // Blue Planet tracing
  const blueX = centerX + ellipseBlueOrbitRadiusX * Math.cos(angleBlue);
  const blueY = centerY + ellipseBlueOrbitRadiusY * Math.sin(angleBlue);

  ctx.beginPath();
  ctx.arc(blueX, blueY, 15, 0, Math.PI * 2);
  ctx.fillStyle = "blue";
  ctx.fill();

  // ------------ // Red Planet tracing
  const redX = centerX + ellipseRedOrbitRadiusX * Math.cos(angleRed);
  const redY = centerY + ellipseRedOrbitRadiusY * Math.sin(angleRed);

  ctx.beginPath();
  ctx.arc(redX, redY, 10, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();

  // Update angles
  angleBlue += blueSpeed;
  angleRed += redSpeed;

  requestAnimationFrame(orbits);
}

orbits();
