import swapiGetterFunc from "./swapiGetter";
import axios from "axios";

jest.mock("axios");
axios.get.mockImplementation(() =>
  Promise.resolve({ data: { name: "Mock Jedi" } })
);

describe("swapiGetter", () => {
  test("should return a name", async () => {
    const res = await swapiGetterFunc(1);

    console.log(res);

    expect(res).toBe("Mock Jedi");
  });
});
