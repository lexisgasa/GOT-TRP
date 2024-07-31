import {
  createAdviser,
  createFighter,
  createKing,
  createSquire,
} from "./characters-factory-functions.js";

const joffreyBaratheon = createKing("Joffrey", "Baratheon", 16, 1);

const jaimeLannister = createFighter("Jaime", "Lannister", 36, "sword", 9);

const daenerysTargaryen = createFighter(
  "Daenerys",
  "Targaryen",
  16,
  "dagger",
  1
);

const tyrionLannister = createAdviser(
  "Tyrion",
  "Lannister",
  24,
  daenerysTargaryen
);

const bronn = createSquire("Bronn", 25, jaimeLannister, 7);

const gotCharacters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
