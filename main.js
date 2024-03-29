const active = document.querySelector(".header__container");
const humburgerBtn = document.querySelector(".humburger__btn");
console.log(humburgerBtn);

const toggleMenu = () => {
  active.classList.toggle("active");
  // overlay.classList.toggle("OverlayIsOpen");
  // button.classList.toggle("BottonIsOpen");
  // body.classList.toggle("IsScrollAllowed");
};
humburgerBtn.addEventListener("click", () => {
  toggleMenu();
});
// overlay.addEventListener("click", () => {
//   toggleMenu();
// });
