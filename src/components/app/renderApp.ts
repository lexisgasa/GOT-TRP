import { gotCharacters } from "../../characters/data.js";
import { renderCardsList } from "../renderCardsList/renderCardsList.js";
import { renderHeader } from "../renderHeader/renderHeader.js";

export const renderApp = () => {
  const container = document.createElement("div");

  container.classList.add("container");

  const header = renderHeader();

  const cardsList = renderCardsList(gotCharacters);

  container.innerHTML = `
    ${header.outerHTML}
    ${cardsList.outerHTML}
  `;

  return container;
};
