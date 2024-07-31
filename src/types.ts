import { Fighter } from "./characters/fighter/type";

export type FidelityRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface mandatoryData {
  name: string;
  surname?: string;
  age: number;
}

export interface Character extends mandatoryData {
  isAlive: boolean;
  die: () => void;
  talk: () => string;
}

export interface Adviser extends Character {
  advisee: Character;
  talk: () => "No sé por qué, pero creo que voy a morir pronto";
}

export interface Squire extends Character {
  servedCharacter: Fighter;
  fidelity: FidelityRange;
  talk: () => "Soy un loser";
}
