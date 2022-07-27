const sliders = document.querySelectorAll(".process__item");
const button = document.querySelector(".process__btn-slide");
let startInx = 0;

button.addEventListener("click", () => {
    console.log(startInx)
    sliders[startInx].style.display = "none";
  if (startInx + 1 === sliders.length) {
    startInx = 0;
    sliders[startInx].style.display = "flex";
    return startInx
  }
  startInx = ++startInx;
  sliders[startInx].style.display = "flex";
  return startInx
});