interface Character {
  name: string;
  surname: string;
  age: number;
  state: "Alive" | "Dead";
  die: () => void;
  talk: () => string;
}

interface King extends Character {
  yearsOfReign: number;
  talk: () => "Vais a morir todos";
}

interface Fighter extends Character {
  weapon: string;
  dexterity: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  talk: () => "Primero pego y luego pregunto";
}
