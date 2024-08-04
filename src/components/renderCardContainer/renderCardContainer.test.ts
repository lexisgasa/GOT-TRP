import { gotCharacters } from "../../characters/data.js";
import { renderCardContainer } from "./renderCardContainer.js";

describe("Given the card container component", () => {
  describe("When the given character is the first one of the gotCharacters array", () => {
    test("Then it should render the name Joffrey Baratheon", () => {
      const screen = document.createElement("div");

      const [joffrey] = gotCharacters;

      const cardInformation = renderCardContainer(joffrey);

      screen.appendChild(cardInformation);

      const card = screen.querySelector("span");

      expect(card).not.toBeNull();
      expect(card?.textContent).toBe("Joffrey Baratheon");
    });
  });
});
