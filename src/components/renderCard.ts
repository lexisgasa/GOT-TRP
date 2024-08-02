import { renderCardContainer } from "./renderCardContainer.js";

export const renderCard = (): HTMLElement => {
  const card = document.createElement("li");

  card.classList.add("card");

  const cardContainer = renderCardContainer();

  card.appendChild(cardContainer);

  return card;
};
