import type { Character } from "../character/types";

export interface King extends Character {
  yearsOfReign: number;
  talk: () => "Vais a morir todos";
}
