const sum = require("./sum");

describe("testing function sum", () => {
  test("add two values together", () => {
    const result = sum(3, 4);
    expect(result).toBe(7);
  });
});
