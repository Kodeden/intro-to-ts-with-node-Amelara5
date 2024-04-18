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

interface Employee {
  company: string;
  jobTitle: string;
  salary?: number;
}

export type EmployeePerson = Person & Employee;

export function greet(personName: Person): string {
  return `Hello, ${personName.firstName} ${personName.lastName}`;
}
