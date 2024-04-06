import { describeCar } from "./challenge.js";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

export function greet(personName: Person): string {
  return `Hello, ${personName.firstName} ${personName.lastName}`;
}

const citizen = {
  firstName: "Andres",
  lastName: "Melara",
  age: 27,
};

console.log(greet(citizen));

const exampleModel = {
  make: "Toyota",
  model: "Corolla",
  year: 2024,
  color: "black",
  isElectric: false,
};

console.log(describeCar(exampleModel));
