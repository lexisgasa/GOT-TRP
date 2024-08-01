import { createCharacter } from "../character/createCharacter";
import type { MandatoryCharacterData } from "../character/types";
import type { DexterityRange, Fighter } from "./types";

export const createFighter = (
  { name, surname, age }: MandatoryCharacterData,
  weapon: string,
  dexterity: DexterityRange,
) => {
  const fighter = createCharacter({ name, surname, age }) as Fighter;

  fighter.weapon = weapon;
  fighter.dexterity = dexterity;
  fighter.talk = () => "Primero pego y luego pregunto";

  return fighter;
};
