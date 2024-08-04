import { gotCharacters } from "../../characters/data.js";
import { renderCardsList } from "./renderCardsList.js";

describe("Given the cards list renderer component", () => {
  describe("When an array of characters is given", () => {
    test("Then it should render as many cards as characters exists in the array", () => {
      const screen = document.createElement("div");
      const characters = gotCharacters;
      const cardsList = renderCardsList(characters);
      const charactersLength = 5;

      screen.appendChild(cardsList);

      const cards = screen.querySelectorAll(".card");

      expect(cards).not.toBeNull();
      expect(cards.length).toBe(charactersLength);
    });
  });
});
