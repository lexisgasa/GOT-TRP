export interface mandatoryCharacterData {
  name: string;
  surname?: string;
  age: number;
}

export interface Character extends mandatoryCharacterData {
  isAlive: boolean;
  die: () => void;
  talk: () => string;
}
