const checkNumber = require("./error_handeling");

describe("test function checkNumber", () => {
  test("return true if input is an integer", () => {
    const input = 5;
    const result = checkNumber(input);
    expect(result).toBe(true);
  });

  test("return true if input is a float", () => {
    const input = 5.23;
    const result = checkNumber(input);
    expect(result).toBe(true);
  });

  test("throw an error if value is a string", () => {
    const input = "hi";
    const result = () => {
      checkNumber(input);
    };
    expect(result).toThrow("This is not a number");
  });
});
