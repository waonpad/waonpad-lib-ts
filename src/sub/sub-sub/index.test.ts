import { describe, expect, it, vi } from "vitest";
import { sayMyName } from ".";

describe(sayMyName, () => {
  it("should say my name", () => {
    const spy = vi.spyOn(console, "log");
    sayMyName();
    expect(spy).toHaveBeenCalledWith("Hello waonpad");
  });
});
