import type { CharacterTypes } from "../../characters/data.js";

export const renderCardInformation = (
  character: CharacterTypes,
): HTMLElement => {
  const cardInformation = document.createElement("div");

  cardInformation.innerHTML = `
    <span>Age: ${character.age} years</span>
    <span>State: </span>
    `;

  return cardInformation;
};
