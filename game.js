const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Jugador
const player = {
  x: 50,
  y: 50,
  size: 30,
  speed: 5,
  dx: 0,
  dy: 0
};

// Detectar teclas
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(e) {
  if (e.key === "ArrowRight") player.dx = player.speed;
  if (e.key === "ArrowLeft") player.dx = -player.speed;
  if (e.key === "ArrowUp") player.dy = -player.speed;
  if (e.key === "ArrowDown") player.dy = player.speed;
}

function keyUp(e) {
  if (
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown"
  ) {
    player.dx = 0;
    player.dy = 0;
  }
}

// Actualizar posición
function update() {
  player.x += player.dx;
  player.y += player.dy;

  // Evitar que salga del canvas
  if (player.x < 0) player.x = 0;
  if (player.y < 0) player.y = 0;
  if (player.x + player.size > canvas.width) player.x = canvas.width - player.size;
  if (player.y + player.size > canvas.height) player.y = canvas.height - player.size;
}

// Dibujar jugador
function drawPlayer() {
  ctx.fillStyle = "blue";
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

// Limpiar canvas
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Bucle del juego
function gameLoop() {
  clear();
  update();
  drawPlayer();

  requestAnimationFrame(gameLoop);
}

gameLoop();
