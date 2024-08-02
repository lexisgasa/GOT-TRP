import { renderCardInformation } from "./renderCardInformation.js";

export const renderCardContainer = (): HTMLElement => {
  const cardContainer = document.createElement("div");

  cardContainer.classList.add("card__container");

  const cardInformation = renderCardInformation();

  cardContainer.innerHTML = `
  <span class="card__title">Nombre Apellidos</span>
  ${cardInformation.outerHTML}
  `;

  return cardContainer;
};
