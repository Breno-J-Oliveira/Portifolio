/* ===========================
   Cubo 3D - Mouse suave + Rotação automática
   =========================== */

const cube = document.querySelector(".cube");

// rotação atual
let rotateX = 0;
let rotateY = 0;

// último ponto do mouse
let lastMouseX = null;
let lastMouseY = null;

// controle de rotação automática
let autoRotate = false;
let idleTimeout;

// velocidade da rotação automática
const autoSpeedX = 0.3;
const autoSpeedY = 0.5;

// multiplicador da sensibilidade do mouse
const sensitivity = 0.4;

/* ===========================
   Rotação contínua do cubo
   =========================== */
function rotateCube() {
  if (autoRotate) {
    rotateX += autoSpeedX;
    rotateY += autoSpeedY;
  }

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  requestAnimationFrame(rotateCube);
}

/* ===========================
   Evento de movimento do mouse
   =========================== */
document.addEventListener("mousemove", (e) => {

  // pausa rotação automática enquanto o mouse se move
  autoRotate = false;

  // se for o primeiro movimento, só registra posição
  if (lastMouseX !== null && lastMouseY !== null) {
    // diferença do mouse
    const deltaX = e.clientX - lastMouseX;
    const deltaY = e.clientY - lastMouseY;

    // incrementa a rotação proporcional ao movimento
    rotateY += deltaX * sensitivity;
    rotateX -= deltaY * sensitivity;
  }

  // atualiza último ponto do mouse
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;

  // reinicia timeout para rotação automática
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(() => {
    autoRotate = true;
  }, 2000);
});

// inicia rotação
rotateCube();

/* ===========================
   Linkando para o github dos projetos
   =========================== */

function projeto(id) {
  const links = {
    1: "https://github.com/Breno-J-Oliveira/UniaoQuimica/tree/main",
    2: "https://github.com/Breno-J-Oliveira/Desafio-Senai/tree/main",
    3: "https://github.com/Breno-J-Oliveira/SiteMaxtitanium",
    4: "https://github.com/Breno-J-Oliveira/Portifolio/tree/main",
    5: "https://github.com/seuUsuario/projeto5",
    6: "https://github.com/seuUsuario/projeto6",
    7: "https://github.com/seuUsuario/projeto7",
    8: "https://github.com/seuUsuario/projeto8"
  };

  // abre o link correspondente em nova aba
  if (links[id]) {
    window.open(links[id], "_blank");
  }
}
