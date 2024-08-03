import { gotCharacters } from "../data.js";
import { renderCardInformation } from "./renderCardInformation.js";

export const renderCardContainer = (): HTMLElement => {
  const cardContainer = document.createElement("div");

  cardContainer.classList.add("card__container");

  const cardInformation = renderCardInformation(gotCharacters);

  gotCharacters.forEach((character) => {
    cardContainer.innerHTML = `
  <span class="card__title">${character.name} ${character.surname ?? ""}</span>
  ${cardInformation.outerHTML}
  `;
  });

  return cardContainer;
};
