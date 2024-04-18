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

interface Student {
  university: string;
  major: string;
  graduationYear: string;
}

export type EmployeePerson = Person & Employee;
export type StudentPerson = Person & Student;

export function greet(personName: Person): string {
  return `Hello, ${personName.firstName} ${personName.lastName}`;
}
