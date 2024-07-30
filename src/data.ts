import { type Fighter, type King } from "./types";

const joffreyBaratheon: King = {
  name: "Joffrey",
  surname: "Baratheon",
  age: 16,
  state: "Alive",
  yearsOfReign: 1,
  die() {
    joffreyBaratheon.state = "Dead";
  },
  talk() {
    return "Vais a morir todos";
  },
};

const jaimeLannister: Fighter = {
  name: "Jaime",
  surname: "Lannister",
  age: 36,
  state: "Alive",
  dexterity: 9,
  weapon: "Sword",
  die() {
    jaimeLannister.state = "Dead";
  },
  talk() {
    return "Primero pego y luego pregunto";
  },
};
