import { Character } from "../character/types";

export interface Adviser extends Character {
  advisee: Character;
  talk: () => "No sé por qué, pero creo que voy a morir pronto";
}
