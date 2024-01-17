const mockCallback = require("./mock");

test("mock implementation of a basic function", () => {
  const mockfn = jest.fn(mockCallback);

  expect(mockfn(1)).toBe(43);
});
