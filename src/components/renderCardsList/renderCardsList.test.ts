import { gotCharacters } from "../../characters/data.js";
import { renderCardsList } from "./renderCardsList.js";

describe("Given the cards list renderer component", () => {
  describe("When 5 characters are given", () => {
    test("Then it should render as many cards as characters exists in the array", () => {
      const screen = document.createElement("div");
      const characters = gotCharacters;
      const charactersLength = gotCharacters.length;

      const cardsList = renderCardsList(characters);
      screen.appendChild(cardsList);
      const cards = screen.querySelectorAll(".card");

      expect(cards.length).toBe(charactersLength);
    });
  });
});
