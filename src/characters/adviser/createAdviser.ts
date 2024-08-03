import { createCharacter } from "../character/createCharacter.js";
import type { Character, MandatoryCharacterData } from "../character/types";
import type { Adviser } from "./types";

export const createAdviser = (
  { name, surname, age }: MandatoryCharacterData,
  advisee: Character,
): Adviser => {
  const adviser = createCharacter({ name, surname, age }) as Adviser;

  adviser.advisee = advisee;
  adviser.talk = () => "No sé por qué, pero creo que voy a morir pronto";

  return adviser;
};
