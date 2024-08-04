import type { CharacterTypes } from "../../characters/data";
import { renderCardContainer } from "../renderCardContainer/renderCardContainer.js";

export const renderCard = (character: CharacterTypes): HTMLElement => {
  const card = document.createElement("li");

  const cardItem = document.createElement("article");

  cardItem.classList.add("card");

  const cardContainer = renderCardContainer(character);

  cardItem.innerHTML = `
  <img src="${character.imageUrl}" alt="Imagen del personaje ${character.name.toLowerCase()}">
  ${cardContainer.outerHTML}
  `;

  card.appendChild(cardItem);

  return card;
};
