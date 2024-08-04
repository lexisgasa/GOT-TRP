import { gotCharacters } from "../../characters/data.js";
import { renderCard } from "../renderCard/renderCard.js";
import { renderHeader } from "../renderHeader/renderHeader.js";

export const renderApp = () => {
  const container = document.createElement("div");

  container.classList.add("container");

  const header = renderHeader();

  const cardList = renderCard(gotCharacters);

  container.innerHTML = `
  ${header.outerHTML}
  ${cardList.outerHTML}
  `;

  return container;
};
