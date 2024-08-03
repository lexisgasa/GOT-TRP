import type { CharacterTypes } from "../data.js";
import { renderCardContainer } from "./renderCardContainer.js";

export const renderCard = (characters: CharacterTypes[]): HTMLElement => {
  const cardList = document.createElement("ul");
  cardList.classList.add("card-list");

  characters.forEach((character) => {
    const card = document.createElement("li");

    card.classList.add("card");

    const cardContainer = renderCardContainer(character);

    card.appendChild(cardContainer);

    cardList.appendChild(card);
  });

  return cardList;
};
