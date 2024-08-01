import type { MandatoryCharacterData } from "../character/types";
import type { Fighter } from "../fighter/types";
import type { FidelityRange, Squire } from "./types";

export const createSquire = (
  { name, surname, age }: MandatoryCharacterData,
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
