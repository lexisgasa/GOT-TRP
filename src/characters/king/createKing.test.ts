import type { MandatoryCharacterData } from "../character/types";
import { createKing } from "./createKing";
import type { King } from "./types";

describe("Given the function createKing", () => {
  describe("When it receives the name Joffrey, the surname Baratheon and the age of 16", () => {
    test("Then it should return a king named Joffrey Baratheon who has the age of 16", () => {
      const mandatoryCharacterData: MandatoryCharacterData = {
        name: "Joffrey",
        surname: "Baratheon",
        age: 16,
      };
      const yearsOfReign = 1;
      const expectedKingName = "Joffrey";
      const expectedKingSurname = "Baratheon";
      const expectedKingAge = 16;

      const king: King = createKing(mandatoryCharacterData, yearsOfReign);

      expect(king.name).toBe(expectedKingName);
      expect(king.surname).toBe(expectedKingSurname);
      expect(king.age).toBe(expectedKingAge);
    });
  });
});
