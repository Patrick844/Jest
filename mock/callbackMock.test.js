const forEach = require("./callbackMock");

describe("testing callbackMock function", () => {
  const mockfn = jest.fn((data) => {
    console.log(data);
  });
  test("testing .calls function of mock", () => {
    forEach([0, 1], mockfn);

    // Number of calls made by the callback
    expect(mockfn.mock.calls).toHaveLength(2);

    // argument of first call
    expect(mockfn.mock.calls[0][0]).toBe(0);

    // argument of second call
    expect(mockfn.mock.calls[1][0]).toBe(1);
  });
});
