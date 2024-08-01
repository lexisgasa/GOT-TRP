import { createCharacter } from "../character/createCharacter";
import type { MandatoryCharacterData } from "../character/types";
import type { King } from "./types";

export const createKing = (
  { name, surname, age }: MandatoryCharacterData,
  yearsOfReign: number,
): King => {
  const king = createCharacter({ name, surname, age }) as King;

  king.yearsOfReign = yearsOfReign;
  king.talk = () => "Vais a morir todos";

  return king;
};
