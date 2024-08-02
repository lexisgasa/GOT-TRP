export const renderCardInformation = (): HTMLElement => {
  const cardInformation = document.createElement("div");

  cardInformation.innerHTML = `
  <span>Age: X years</span>
  <br>
  <span>State: </span>
  `;

  return cardInformation;
};
