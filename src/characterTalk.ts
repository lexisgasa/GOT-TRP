import { characterTypes } from "./data.js";

const characterTalk = (characters: characterTypes[]): string[] => {
  return characters.map((character) => character.talk());
};
