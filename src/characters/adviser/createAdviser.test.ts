import type { Character, MandatoryCharacterData } from "../character/types";
import { createAdviser } from "./createAdviser";

describe("Given the function createAdviser", () => {
  describe("When it receives the name Tyrion and the advisee Daenerys", () => {
    test("Then it should return an adviser named Tyrion whose advisee's name is Daenerys", () => {
      const mandatoryCharacterData: MandatoryCharacterData = {
        name: "Tyrion",
        surname: "Lannister",
        age: 24,
      };
      const expectedAdviserName = "Tyrion";
      const expectedAdviseeName = "Daenerys";
      const advisee: Character = {
        name: "Daenerys",
        surname: "Targaryen",
        age: 16,
        isAlive: true,
        talk() {
          return "";
        },
        die() {
          this.isAlive = false;
        },
      };

      const adviser = createAdviser(mandatoryCharacterData, advisee);

      expect(adviser.name).toBe(expectedAdviserName);
      expect(adviser.advisee.name).toBe(expectedAdviseeName);
    });
  });
});
