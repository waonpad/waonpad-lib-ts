import { describe, expect, it, vi } from "vitest";
import { sayYourName } from ".";

describe(sayYourName, () => {
  it("should log Hello John Doe", () => {
    const spy = vi.spyOn(console, "log");
    sayYourName("John Doe");
    expect(spy).toHaveBeenCalledWith("Hello John Doe");
  });
});
