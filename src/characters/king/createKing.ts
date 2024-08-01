import { mandatoryCharacterData } from "../character/types";
import { King } from "./types";

export const createKing = (
  { name, surname, age }: mandatoryCharacterData,
  yearsOfReign: number,
): King => {
  const king: King = {
    name,
    surname,
    age,
    isAlive: true,
    yearsOfReign,
    talk() {
      return "Vais a morir todos";
    },
    die() {
      king.isAlive = false;
    },
  };

  return king;
};
