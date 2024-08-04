export interface MandatoryCharacterData {
  name: string;
  surname?: string;
  age: number;
}

export interface Character extends MandatoryCharacterData {
  isAlive: boolean;
  imageUrl: string;
  die: () => void;
  talk: () => string;
}
