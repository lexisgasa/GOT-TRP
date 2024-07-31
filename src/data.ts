import { type Squire, type Adviser } from "./types";
import { createFighter, createKing } from "./characters-factory-functions.js";

const joffreyBaratheon = createKing("Joffrey", "Baratheon", 16, 1);

const jaimeLannister = createFighter("Jaime", "Lannister", 36, "sword", 9);

const daenerysTargaryen = createFighter(
  "Daenerys",
  "Targaryen",
  16,
  "dagger",
  1
);

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
