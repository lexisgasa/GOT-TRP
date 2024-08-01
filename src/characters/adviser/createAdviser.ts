import type { Character, MandatoryCharacterData } from "../character/types";
import type { Adviser } from "./types";

export const createAdviser = (
  { name, surname, age }: MandatoryCharacterData,
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
