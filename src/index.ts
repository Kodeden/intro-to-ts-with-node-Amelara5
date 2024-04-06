import { describeCar } from "./challenge.js";

interface Address {
  street: string;
  city: string;
  state: string;
  zip: number;
}

interface Person {
  readonly id: number;
  firstName: string;
  lastName: string;
  age: number;

  address: Address;

  hobbies?: string[];
}

export function greet(personName: Person): string {
  return `Hello, ${personName.firstName} ${personName.lastName}`;
}

const citizen = {
  id: 1,
  firstName: "Andres",
  lastName: "Melara",
  age: 27,
  address: {
    street: "571 Fake Ave",
    city: "Falseville",
    state: "DC",
    zip: 20006,
  },
};

console.log(greet(citizen));

// const exampleModel = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2024,
//   color: "black",
//   isElectric: false,
// };

// const exampleModel2 = { ...exampleModel, isElectric: true, remoteStart: true };

// console.log(describeCar(exampleModel));
// console.log(describeCar(exampleModel2));
