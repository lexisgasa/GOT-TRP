import { mandatoryCharacterData } from "../character/types";
import { Fighter } from "../fighter/types";
import { FidelityRange, Squire } from "./types";

export const createSquire = (
  { name, surname, age }: mandatoryCharacterData,
  servedCharacter: Fighter,
  fidelity: FidelityRange,
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
