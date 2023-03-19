/* ---- TARGETS && INITIALIZERS ---- */
const toggleBtn = getElement(".btn");

/* ---- SCRIPT ---- */

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

/* ---- FUNCTIONS ---- */

//-- Get DOM element function
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${element} is not found`);
}
