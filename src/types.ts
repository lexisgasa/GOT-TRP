export type DexterityRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type FidelityRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Character {
  name: string;
  surname?: string;
  age: number;
  isAlive: boolean;
  die: () => void;
  talk: () => string;
}

export interface King extends Character {
  yearsOfReign: number;
  talk: () => "Vais a morir todos";
}

export interface Fighter extends Character {
  weapon: string;
  dexterity: DexterityRange;
  talk: () => "Primero pego y luego pregunto";
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
