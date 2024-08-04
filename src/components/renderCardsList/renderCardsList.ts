import type { CharacterTypes } from "../../characters/data.js";
import { renderCard } from "../renderCard/renderCard.js";

export const renderCardsList = (characters: CharacterTypes[]): HTMLElement => {
  const cardsList = document.createElement("ul");

  cardsList.classList.add("cards-list");

  characters.forEach((character) => {
    const card = renderCard(character);

    cardsList.appendChild(card);
  });

  return cardsList;
};
