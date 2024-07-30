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
