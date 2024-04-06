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
