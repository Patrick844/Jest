test("testing pages", async () => {
  const result = await fetch("http://localhost:3000/api/");
  const data = await result.json();
  expect(data).toEqual({ data: { name: "Patrick", age: "27" }, status: 200 });
});
