import { Character, mandatoryCharacterData } from "../character/types";
import { Adviser } from "./types";

export const createAdviser = (
  { name, surname, age }: mandatoryCharacterData,
  advisee: Character,
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
