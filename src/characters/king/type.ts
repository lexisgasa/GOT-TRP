import { Character } from "../../types";

export interface King extends Character {
  yearsOfReign: number;
  talk: () => "Vais a morir todos";
}
