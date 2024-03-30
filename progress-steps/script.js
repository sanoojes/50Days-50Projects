const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circle = document.querySelectorAll(".circle");

let active = 0;

next.addEventListener("click", () => {
  active++;
  if (active >= circle.length) active = circle.length;
  update();
  console.log(active);
});

prev.addEventListener("click", () => {
  active--;
  if (active < 0) active = 0;
  update();
  console.log(active);
});

(update = () => {
  circle.forEach((circle, idx) => {
    if (idx <= active) circle.classList.add("active");
    else if (idx >= active) circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circle.length - 1)) * 100 + "%";
  if (active === 0) {
    prev.classList.add("prev");
  } else {
    prev.classList.remove("prev");
  }
  if (active === circle.length) {
    next.classList.add("next");
  } else {
    next.classList.remove("next");
  }
})();
