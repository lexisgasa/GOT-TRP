import type { MandatoryCharacterData } from "../character/types";
import { createFighter } from "./createFighter";
import type { DexterityRange, Fighter } from "./types";

describe("Given the function createFighter", () => {
  describe("When it receives the name Jaime, the surname Lannister and a sword as a weapon", () => {
    test("Then it should return a fighter named Jaime Lannister that uses a sword as a weapon", () => {
      const mandatoryCharacterData: MandatoryCharacterData = {
        name: "Jaime",
        surname: "Lannister",
        age: 36,
      };
      const weapon = "sword";
      const dexterity: DexterityRange = 9;
      const expectedFighterName = "Jaime";
      const expectedFighterSurname = "Lannister";
      const expectedFighterWeapon = "sword";

      const fighter: Fighter = createFighter(
        mandatoryCharacterData,
        weapon,
        dexterity,
      );

      expect(fighter.name).toBe(expectedFighterName);
      expect(fighter.surname).toBe(expectedFighterSurname);
      expect(fighter.weapon).toBe(expectedFighterWeapon);
    });
  });
});
