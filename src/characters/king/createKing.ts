import type { MandatoryCharacterData } from "../character/types";
import type { King } from "./types";

export const createKing = (
  { name, surname, age }: MandatoryCharacterData,
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
