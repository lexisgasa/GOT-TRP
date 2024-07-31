import { DexterityRange, Fighter } from "./characters/fighter/type";
import type {
  Adviser,
  Character,
  mandatoryData,
  FidelityRange,
  Squire,
} from "./types";

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

export const createSquire = (
  { name, surname, age }: mandatoryData,
  servedCharacter: Fighter,
  fidelity: FidelityRange
): Squire => {
  const squire: Squire = {
    name,
    surname,
    age,
    isAlive: true,
    servedCharacter,
    fidelity,
    talk() {
      return "Soy un loser";
    },
    die() {
      squire.isAlive = false;
    },
  };

  return squire;
};
