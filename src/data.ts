import { type Squire, type Adviser, type Fighter, type King } from "./types";

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

const tyrionLannister: Adviser = {
  name: "Tyrion",
  surname: "Lannister",
  age: 24,
  state: "Alive",
  companion: daenerysTargaryen,
  die() {
    tyrionLannister.state = "Dead";
  },
  talk() {
    return "No sé por qué, pero creo que voy a morir pronto";
  },
};

const bronn: Squire = {
  name: "Bronn",
  age: 25,
  state: "Alive",
  companion: jaimeLannister,
  fidelity: 7,
  die() {
    bronn.state = "Dead";
  },
  talk() {
    return "Soy un loser";
  },
};
