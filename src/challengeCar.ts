type VehicleType =
  | "car"
  | "truck"
  | "suv"
  | "van"
  | "motorcycle"
  | "boat"
  | "plane"
  | "spaceship"
  | "other";

interface Car {
  make: string;
  model: string;
  year: number;
  color: string;
  isElectric: boolean;
  remoteStart?: boolean;
  vehicleType: VehicleType;
}

export function describeCar(specs: Car): string {
  return `The ${specs.vehicleType} you are looking for is a ${specs.make} ${specs.model}.`;
}

// const exampleModel = {
//   make: "Toyota",
//   model: "Corolla",
//   year: 2024,
//   color: "black",
//   isElectric: false,
//   vehicleType: "other",
// };

// const exampleModel2 = { ...exampleModel, isElectric: true, remoteStart: true };

// console.log(describeCar(exampleModel));
// console.log(describeCar(exampleModel2));
