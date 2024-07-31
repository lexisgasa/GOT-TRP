import { mandatoryData } from "../../types";
import { King } from "./type";

export const createKing = (
  { name, surname, age }: mandatoryData,
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
