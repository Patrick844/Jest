const fetchData = require("./callbacks");

test("testing callbacks", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("ramen");
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});
