import { Fighter } from "./characters/fighter/type";
import type { mandatoryData, FidelityRange, Squire } from "./types";

export const createSquire = (
  { name, surname, age }: mandatoryData,
  servedCharacter: Fighter,
  fidelity: FidelityRange
): Squire => {
  const squire: Squire = {
    name,
    surname,
    age,
    isAlive: true,
    servedCharacter,
    fidelity,
    talk() {
      return "Soy un loser";
    },
    die() {
      squire.isAlive = false;
    },
  };

  return squire;
};
