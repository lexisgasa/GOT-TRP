import { Character } from "../character/types";
import { Fighter } from "../fighter/types";

export type FidelityRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Squire extends Character {
  servedCharacter: Fighter;
  fidelity: FidelityRange;
  talk: () => "Soy un loser";
}
