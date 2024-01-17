function fetchData(callback) {
  setTimeout(() => {
    callback("ramen");
  }, 3000);
}

module.exports = fetchData;
