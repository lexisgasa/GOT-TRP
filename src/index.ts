import { renderApp } from "./components/app/renderApp.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("Ha habido un error con el elemento root");
}

const app = renderApp();

root.appendChild(app);
