function fetchPromise(value) {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      setTimeout(() => {
        resolve("success");
      }, 3000);
    } else {
      setTimeout(() => {
        reject("error");
      }, 3000);
    }
  });
}

module.exports = fetchPromise;
