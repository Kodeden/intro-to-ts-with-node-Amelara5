import { describeCar } from "./challengeCar.js";
import type { EmployeePerson } from "./challengePerson.js";
import { greet } from "./challengePerson.js";

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

const employee: EmployeePerson = {
  id: 2,
  firstName: "Alice",
  lastName: "Smith",
  age: 28,
  address: {
    street: "456 Main St",
    city: "Metropolis",
    state: "NY",
    zip: 10001,
  },
  company: "Globex Corporation",
  jobTitle: "Software Developer",
};

console.log(greet(employee)); // Works as employee is a Person

console.log(greet(citizen));

const exampleModel = {
  make: "Toyota",
  model: "Corolla",
  year: 2024,
  color: "black",
  isElectric: false,
  vehicleType: "other",
};

const exampleModel2 = { ...exampleModel, isElectric: true, remoteStart: true };

console.log(describeCar(exampleModel));
console.log(describeCar(exampleModel2));
