import { createCharacter } from "../character/createCharacter";
import type { MandatoryCharacterData } from "../character/types";
import type { Fighter } from "../fighter/types";
import type { FidelityRange, Squire } from "./types";

export const createSquire = (
  { name, surname, age }: MandatoryCharacterData,
  servedCharacter: Fighter,
  fidelity: FidelityRange,
): Squire => {
  const squire = createCharacter({ name, surname, age }) as Squire;

  squire.servedCharacter = servedCharacter;
  squire.fidelity = fidelity;
  squire.talk = () => "Soy un loser";

  return squire;
};
