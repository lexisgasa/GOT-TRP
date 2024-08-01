import { mandatoryCharacterData } from "../character/types";
import { Fighter } from "../fighter/types";
import { createSquire } from "./createSquire";
import { FidelityRange } from "./types";

describe("Given the function createSquire", () => {
  describe("When it receives the name Bronn and the serving person's name Jaime", () => {
    test("Then it should return a squire named Bronn who serves someone named Jaime", () => {
      const mandatoryCharacterData: mandatoryCharacterData = {
        name: "Bronn",
        age: 25,
      };
      const expectedSquireName = "Bronn";
      const expectedServedCharacterName = "Jaime";
      const fidelity: FidelityRange = 7;
      const servedCharacter: Fighter = {
        name: "Jaime",
        surname: "Lannister",
        age: 36,
        isAlive: true,
        weapon: "sword",
        dexterity: 9,
        talk() {
          return "Primero pego y luego pregunto";
        },
        die() {},
      };

      const squire = createSquire(
        mandatoryCharacterData,
        servedCharacter,
        fidelity,
      );

      expect(squire.name).toBe(expectedSquireName);
      expect(squire.servedCharacter.name).toBe(expectedServedCharacterName);
    });
  });
});
