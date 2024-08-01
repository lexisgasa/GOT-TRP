export interface MandatoryCharacterData {
  name: string;
  surname?: string;
  age: number;
}

export interface Character extends MandatoryCharacterData {
  isAlive: boolean;
  die: () => void;
  talk: () => string;
}
