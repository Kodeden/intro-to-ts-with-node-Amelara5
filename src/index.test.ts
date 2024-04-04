import { describe, expect, it } from "vitest";
import { greet } from "./index.js";

describe("greet", () => {
  it("should return a basic string", () => {
    expect(greet("Andres")).toBe("Hello, Andres");
    expect(greet("Alejandro")).toBe("Hello, Alejandro");
  });
});
