import { createCharacter } from "./createCharacter";
import type { MandatoryCharacterData } from "./types";

describe("Given the function createCharacter", () => {
  describe("When it receives the name William and the surname Blasco", () => {
    test("Then it should return a character named William Blasco", () => {
      const mandatoryCharacterData: MandatoryCharacterData = {
        name: "William",
        surname: "Blasco",
        age: 52,
      };
      const expectedCharacterName = "William";
      const expectedCharacterSurname = "Blasco";

      const character = createCharacter(mandatoryCharacterData);

      expect(character.name).toBe(expectedCharacterName);
      expect(character.surname).toBe(expectedCharacterSurname);
    });
  });
});
