import { createAdviser } from "./adviser/createAdviser.js";
import { type Adviser } from "./adviser/types.js";
import { createFighter } from "./fighter/createFighter.js";
import { type Fighter } from "./fighter/types.js";
import { createKing } from "./king/createKing.js";
import { type King } from "./king/types.js";
import { createSquire } from "./squire/createSquire.js";
import { type Squire } from "./squire/types.js";

const joffreyBaratheon = createKing(
  { name: "Joffrey", surname: "Baratheon", age: 16 },
  1,
);

const jaimeLannister = createFighter(
  { name: "Jaime", surname: "Lannister", age: 36 },
  "sword",
  9,
);

const daenerysTargaryen = createFighter(
  { name: "Daenerys", surname: "Targaryen", age: 16 },
  "dagger",
  1,
);

const tyrionLannister = createAdviser(
  { name: "Tyrion", surname: "Lannister", age: 24 },
  daenerysTargaryen,
);

const bronn = createSquire({ name: "Bronn", age: 25 }, jaimeLannister, 7);

export type CharacterTypes = King | Fighter | Adviser | Squire;

export const gotCharacters: CharacterTypes[] = [
  joffreyBaratheon,
  jaimeLannister,
  daenerysTargaryen,
  tyrionLannister,
  bronn,
];
