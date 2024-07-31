import { Character } from "../../types";
import { createAdviser } from "./createAdviser";

describe("Given the function createAdviser", () => {
  describe("When it receives the values {'Tyrion', 'Lannister', '24'}, daenerysTargaryen", () => {
    test("Then it should return an object type Adviser with the properties name: 'Tyrion', advisee.name: 'Daenerys'", () => {
      const mandatoryData = { name: "Tyrion", surname: "Lannister", age: 24 };
      const advisee: Character = {
        name: "Daenerys",
        surname: "Targaryen",
        age: 16,
        isAlive: true,
        talk() {
          return "";
        },
        die() {},
      };
      const expectedTyrion = {
        name: "Tyrion",
        surname: "Lannister",
        advisee: { name: "Daenerys" },
      };

      const tyrion = createAdviser(mandatoryData, advisee);

      expect(tyrion.name).toBe(expectedTyrion.name);
      expect(tyrion.advisee.name).toBe(expectedTyrion.advisee.name);
    });
  });
});
