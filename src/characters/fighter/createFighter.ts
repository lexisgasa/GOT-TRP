import { mandatoryCharacterData } from "../character/types";
import { DexterityRange, Fighter } from "./types";

export const createFighter = (
  { name, surname, age }: mandatoryCharacterData,
  weapon: string,
  dexterity: DexterityRange,
) => {
  const figther: Fighter = {
    name,
    surname,
    age,
    isAlive: true,
    weapon,
    dexterity,
    talk() {
      return "Primero pego y luego pregunto";
    },
    die() {
      figther.isAlive = false;
    },
  };
  return figther;
};
