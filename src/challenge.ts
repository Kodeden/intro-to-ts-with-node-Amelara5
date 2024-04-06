interface Car {
  make: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
}

export function describeCar(specs: Car): string {
  return `The car you are looking for is a ${specs.make} ${specs.model}.`;
}

// const exampleModel = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2024,
//   color: "black",
//   isElectric: false,
// };

// describeCar(exampleModel);
