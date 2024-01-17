const checkFalsyTruthy = require("./toBeFalsy_Truthy");

//Should return true if value is undefined,null,0,blank
describe("test-1", () => {
  test("check if return value is falsy", () => {
    const input = 9;
    const result = checkFalsyTruthy(input);
    expect(result).toBeFalsy();
  });

  test("check if return value is truthy ", () => {
    const input = 11;
    const result = checkFalsyTruthy(input);
    expect(result).toBeTruthy();
  });
});
