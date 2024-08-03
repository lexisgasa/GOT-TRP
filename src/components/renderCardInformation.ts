import type { CharacterTypes } from "../data.js";

export const renderCardInformation = (
  characters: CharacterTypes[],
): HTMLElement => {
  const cardInformation = document.createElement("div");

  characters.forEach((character) => {
    cardInformation.innerHTML = `
    <span>Age: ${character.age} years</span>
    <br>
    <span>State: </span>
    `;
  });

  return cardInformation;
};
