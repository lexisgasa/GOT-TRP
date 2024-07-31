import { createKing } from "./createKing";

describe("Given the function createKing", () => {
  describe("When it receives the values {'Joffrey', 'Baratheon', '16'}, 1", () => {
    test("Then it should return an object type King with the properties name: 'Joffrey', surname: 'Baratheon', age: 16", () => {
      const mandatoryData = {
        name: "Joffrey",
        surname: "Baratheon",
        age: 16,
      };
      const yearsOfReign = 1;
      const expectedJoffrey = {
        name: "Joffrey",
        surname: "Baratheon",
        age: 16,
        yearsOfReign: 1,
      };

      const joffrey = createKing(mandatoryData, yearsOfReign);

      expect(joffrey.name).toBe(expectedJoffrey.name);
      expect(joffrey.surname).toBe(expectedJoffrey.surname);
      expect(joffrey.age).toBe(expectedJoffrey.age);
    });
  });
});
