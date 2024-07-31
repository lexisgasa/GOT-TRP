import { Fighter } from "../fighter/type";
import { createSquire } from "./createSquire";

describe("Given the function createSquire", () => {
  describe("When it receives the values name: 'Bronn' and servedCharacter.name: 'Jaime',", () => {
    test("Then it should return an object type Squire with the properties name: 'Bronn', servedCharacter.name: 'Jaime'", () => {
      const mandatoryData = { name: "Bronn", age: 25 };
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
      const fidelity = 7;
      const expectedBronn = {
        name: "Bronn",
        servedCharacter: { name: "Jaime" },
      };

      const bronn = createSquire(mandatoryData, servedCharacter, fidelity);

      expect(bronn.name).toBe(expectedBronn.name);
      expect(bronn.servedCharacter.name).toBe(
        expectedBronn.servedCharacter.name
      );
    });
  });
});
