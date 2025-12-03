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

// Function to draw a planet
function drawPlanet(x, y, radius, color) {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function orbits() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Sun glow
  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    30,
    centerX,
    centerY,
    70
  );
  gradient.addColorStop(0, "yellow");
  gradient.addColorStop(0.5, "orange");
  gradient.addColorStop(1, "transparent");

  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 70, 0, Math.PI * 2);
  ctx.fill();

  // Loop example: draw orbit outlines
  const orbitsConfig = [
    {
      rx: ellipseBlueOrbitRadiusX,
      ry: ellipseBlueOrbitRadiusY,
      color: "lightblue",
    },
    { rx: ellipseRedOrbitRadiusX, ry: ellipseRedOrbitRadiusY, color: "pink" },
  ];

  for (let i = 0; i < orbitsConfig.length; i++) {
    ctx.beginPath();
    ctx.ellipse(
      centerX,
      centerY,
      orbitsConfig[i].rx,
      orbitsConfig[i].ry,
      0,
      0,
      Math.PI * 2
    );
    ctx.strokeStyle = orbitsConfig[i].color;
    // ctx.stroke(); // - remove  '//' to see the path
  }

  // Blue planet
  const blueX = centerX + ellipseBlueOrbitRadiusX * Math.cos(angleBlue);
  const blueY = centerY + ellipseBlueOrbitRadiusY * Math.sin(angleBlue);
  drawPlanet(blueX, blueY, 15, "blue");

  // Red planet
  const redX = centerX + ellipseRedOrbitRadiusX * Math.cos(angleRed);
  const redY = centerY + ellipseRedOrbitRadiusY * Math.sin(angleRed);
  drawPlanet(redX, redY, 10, "red");

  // Conditional example
  if (blueX > centerX) {
    console.log("Blue planet is on the right side of the orbit");
  } else {
    console.log("Blue planet is on the left side of the orbit");
  }

  // Update angles
  angleBlue += blueSpeed;
  angleRed += redSpeed;

  requestAnimationFrame(orbits);
}

orbits();
