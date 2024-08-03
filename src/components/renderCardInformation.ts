import type { CharacterTypes } from "../data.js";

export const renderCardInformation = (
  character: CharacterTypes,
): HTMLElement => {
  const cardInformation = document.createElement("div");

  cardInformation.innerHTML = `
    <span>Age: ${character.age} years</span>
    <br>
    <span>State: </span>
    `;

  return cardInformation;
};
