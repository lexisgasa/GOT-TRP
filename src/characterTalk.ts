import { type CharacterTypes } from "./data.js";

const characterTalk = (characters: CharacterTypes[]): string[] =>
  characters.map((character) => character.talk());
