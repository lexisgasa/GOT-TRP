import { type Squire, type Adviser, type Fighter, type King } from "./types";
import { createKing } from "./characters-factory-functions.js";

const joffreyBaratheon = createKing("Joffrey", "Baratheon", 16, 1);

const jaimeLannister: Fighter = {
  name: "Jaime",
  surname: "Lannister",
  age: 36,
  isAlive: true,
  dexterity: 9,
  weapon: "Sword",
  die() {
    jaimeLannister.isAlive = false;
  },
  talk() {
    return "Primero pego y luego pregunto";
  },
};

const daenerysTargaryen: Fighter = {
  name: "Daenerys",
  surname: "Targaryen",
  age: 16,
  isAlive: true,
  dexterity: 1,
  weapon: "Dagger",
  die() {
    daenerysTargaryen.isAlive = false;
  },
  talk() {
    return "Primero pego y luego pregunto";
  },
};

const tyrionLannister: Adviser = {
  name: "Tyrion",
  surname: "Lannister",
  age: 24,
  isAlive: true,
  advisee: daenerysTargaryen,
  die() {
    tyrionLannister.isAlive = false;
  },
  talk() {
    return "No sé por qué, pero creo que voy a morir pronto";
  },
};

const bronn: Squire = {
  name: "Bronn",
  age: 25,
  isAlive: true,
  servedCharacter: jaimeLannister,
  fidelity: 7,
  die() {
    bronn.isAlive = false;
  },
  talk() {
    return "Soy un loser";
  },
};

const gotCharacters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
