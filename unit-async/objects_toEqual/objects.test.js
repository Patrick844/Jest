const addProperty = require("./objects");

describe("add Property function", () => {
  test("Adding new property to an object ", () => {
    const key = "c";
    const value = 3;
    const obj = { a: 1 };

    const result = addProperty(key, value, obj);

    expect(result).toEqual({ a: 1, c: 3 });
  });
});
