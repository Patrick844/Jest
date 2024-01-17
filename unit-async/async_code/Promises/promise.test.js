const fetchPromise = require("./promise");

test("success when value gt 10", async () => {
  const value = 17;
  await expect(fetchPromise(value)).resolves.toBe("success");
});

test("error when value lt or equal to 10", async () => {
  const value = 2;
  await expect(fetchPromise(value)).rejects.toBe("error");
});
