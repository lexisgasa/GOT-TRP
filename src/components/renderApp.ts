import { renderCard } from "./renderCard.js";
import { renderHeader } from "./renderHeader.js";

export const renderApp = () => {
  const container = document.createElement("div");

  container.classList.add("container");

  const header = renderHeader();
  const card = renderCard();

  container.innerHTML = `
  ${header.outerHTML}
  ${card.outerHTML}
  `;
  return container;
};
