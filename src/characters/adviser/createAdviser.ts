import { Character, mandatoryData } from "../../types";
import { Adviser } from "./type";

export const createAdviser = (
  { name, surname, age }: mandatoryData,
  advisee: Character
): Adviser => {
  const adviser: Adviser = {
    name,
    surname,
    age,
    isAlive: true,
    advisee,
    talk() {
      return "No sé por qué, pero creo que voy a morir pronto";
    },
    die() {
      adviser.isAlive = false;
    },
  };

  return adviser;
};
