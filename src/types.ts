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
