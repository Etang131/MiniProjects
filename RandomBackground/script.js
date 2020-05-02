btn = document.getElementById("btn");
a = Math.floor(Math.random() * 256);
b = Math.floor(Math.random() * 256);
c = Math.floor(Math.random() * 256);

document.getElementById("btn").onclick = function () {
  changeBackground();
};

function changeBackground() {
  document.body.style.backgroundColor = `rgb(${a},${b},${c})`;
  document.getElementById("appear").style.display = "block";
  a = Math.floor(Math.random() * 256);
  b = Math.floor(Math.random() * 256);
  c = Math.floor(Math.random() * 256);
  document.getElementById("displayColor").textContent = `${a}, ${b}, ${c}`;
}
