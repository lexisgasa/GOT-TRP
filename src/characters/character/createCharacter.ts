import type { Character, MandatoryCharacterData } from "./types";

export const createCharacter = ({
  name,
  surname,
  age,
}: MandatoryCharacterData): Character => {
  const character: Character = {
    name,
    surname,
    age,
    imageUrl: `images/${name.toLocaleLowerCase()}.webp`,
    isAlive: true,
    talk() {
      return "";
    },
    die() {
      this.isAlive = false;
    },
  };
  return character;
};
