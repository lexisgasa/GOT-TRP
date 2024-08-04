import type { CharacterTypes } from "../../characters/data";
import { renderCardInformation } from "../renderCardInformation/renderCardInformation.js";

export const renderCardContainer = (character: CharacterTypes): HTMLElement => {
  const cardContainer = document.createElement("div");

  cardContainer.classList.add("card__container");

  const cardInformation = renderCardInformation(character);

  cardContainer.innerHTML = `
    <span class="card__title">${character.name} ${character.surname ?? ""}</span>
    ${cardInformation.outerHTML}
  `;

  return cardContainer;
};
