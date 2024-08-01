import { renderHeader } from "./renderHeader.js";

export const renderApp = () => {
  const container = document.createElement("div");

  container.classList.add("container");

  const header = renderHeader();

  container.appendChild(header);
  return container;
};
