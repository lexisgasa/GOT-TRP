import type { CharacterTypes } from "../../characters/data";
import { renderCardContainer } from "../renderCardContainer/renderCardContainer.js";

export const renderCard = (characters: CharacterTypes[]): HTMLElement => {
  const cardList = document.createElement("ul");
  cardList.classList.add("cards-list");

  characters.forEach((character) => {
    const card = document.createElement("li");

    card.classList.add("card");

    const cardContainer = renderCardContainer(character);

    card.appendChild(cardContainer);

    cardList.appendChild(card);
  });

  return cardList;
};
