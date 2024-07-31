import { createFighter } from "./createFighter";

describe("Given the function createFighter", () => {
  describe("When it receives the values {'Jaime', 'Lannister', '36'},'sword', 9", () => {
    test("Then it should return an object type Fighter with the properties name: 'Jaime', surname: 'Lannister', weapon: 'sword'", () => {
      const mandatoryData = { name: "Jaime", surname: "Lannister", age: 36 };
      const weapon = "sword";
      const dexterity = 9;
      const expectedJaime = {
        name: "Jaime",
        surname: "Lannister",
        weapon: "sword",
      };

      const jaime = createFighter(mandatoryData, weapon, dexterity);

      expect(jaime.name).toBe(expectedJaime.name);
      expect(jaime.surname).toBe(expectedJaime.surname);
      expect(jaime.weapon).toBe(expectedJaime.weapon);
    });
  });
});
