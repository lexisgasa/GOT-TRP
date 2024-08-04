import { renderApp } from "./components/app/renderApp.js";

const root = document.querySelector(".root");

if (!root) {
  throw new Error("El elemento root no existe");
}

const app = renderApp();

root.appendChild(app);
