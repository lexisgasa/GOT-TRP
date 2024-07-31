import {
  createAdviser,
  createFighter,
  createSquire,
} from "./characters-factory-functions.js";
import { createKing } from "./characters/king/createKing.js";

const joffreyBaratheon = createKing(
  { name: "Joffrey", surname: "Baratheon", age: 16 },
  1
);

const jaimeLannister = createFighter(
  { name: "Jaime", surname: "Lannister", age: 36 },
  "sword",
  9
);

const daenerysTargaryen = createFighter(
  { name: "Daenerys", surname: "Targaryen", age: 16 },
  "dagger",
  1
);

const tyrionLannister = createAdviser(
  { name: "Tyrion", surname: "Lannister", age: 24 },
  daenerysTargaryen
);

const bronn = createSquire({ name: "Bronn", age: 25 }, jaimeLannister, 7);

const gotCharacters = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
