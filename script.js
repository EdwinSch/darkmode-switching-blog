/* ---- TARGETS && INITIALIZERS ---- */
import { articles } from "./data.js";

const toggleBtn = getElement(".btn");
const articlesContainer = getElement(".articles");

/* ---- SCRIPT ---- */

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles.map((article) => {
  // destructure incoming data
  const { id, title, date, length, snippet } = article;
  // create new article for each data item
  const articleComp = document.createElement("article");
  articleComp.classList.add("post");
  articleComp.setAttribute("data-id", id);
  // create articles inner content
  articleComp.innerHTML = `
  <h2>${title}</h2>
  <div class="post-info">
    <span>${date}</span>
    <span>${length} minute read</span>
  </div>
  <p>
    ${snippet}
  </p>`;
  // append articles to DOM
  articlesContainer.appendChild(articleComp);
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
