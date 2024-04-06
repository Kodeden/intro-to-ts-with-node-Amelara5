import { describe, expect, it } from "vitest";
import { greet } from "./index.js";

describe("greet", () => {
  it("should return a basic string", () => {
    const citizen1 = {
      firstName: "Andres",
      lastName: "Melara",
      age: 27,
    };
    const citizen2 = {
      firstName: "Alejandro",
      lastName: "Torres",
      age: 27,
    };
    expect(greet(citizen1)).toBe("Hello, Andres Melara");
    expect(greet(citizen2)).toBe("Hello, Alejandro Torres");
  });
});
