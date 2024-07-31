import type {
  Adviser,
  Character,
  DexterityRange,
  FidelityRange,
  Fighter,
  King,
  Squire,
} from "./types";

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

export const createFighter = (
  name: string,
  surname: string,
  age: number,
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

export const createAdviser = (
  name: string,
  surname: string,
  age: number,
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
  name: string,
  age: number,
  servedCharacter: Fighter,
  fidelity: FidelityRange,
  surname?: string
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
