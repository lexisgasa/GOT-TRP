import type { King } from "./types";

export const createKing = (
  name: string,
  surname: string,
  age: number,
  yearsOfReign: number
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
