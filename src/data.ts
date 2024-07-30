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

const daenerysTargaryen: Fighter = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 16,
  state: "Alive",
  dexterity: 1,
  weapon: "Dagger",
  die() {
    daenerysTargaryen.state = "Dead";
  },
  talk() {
    return "Primero pego y luego pregunto";
  },
};
