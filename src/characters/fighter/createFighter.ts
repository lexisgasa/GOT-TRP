import { mandatoryData } from "../../types";
import { DexterityRange, Fighter } from "./type";

export const createFighter = (
  { name, surname, age }: mandatoryData,
  weapon: string,
  dexterity: DexterityRange
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
