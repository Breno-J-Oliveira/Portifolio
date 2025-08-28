const cube = document.querySelector(".cube");
let rotateX = 0;
let rotateY = 0;

document.addEventListener("mousemove", e => {
  rotateY = e.clientX / window.innerWidth * 360;
  rotateX = -e.clientY / window.innerHeight * 360;
  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});